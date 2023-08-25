import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import {
  authorizationValidationMiddleware,
  errorHandlerMiddleware,
  notificationHandlerMiddleware,
} from 'server/middlewares';
import { schoolValidationSchema } from 'validationSchema/schools';
import { convertQueryToPrismaUtil, getOrderByOptions, parseQueryParams } from 'server/utils';
import { getServerSession } from '@roq/nextjs';
import { GetManyQueryOptions } from 'interfaces';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getSchools();
    case 'POST':
      return createSchool();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getSchools() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const response = await prisma.school
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findManyPaginated({
        ...convertQueryToPrismaUtil(query, 'school'),
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
      });
    return res.status(200).json(response);
  }

  async function createSchool() {
    await schoolValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.attendance?.length > 0) {
      const create_attendance = body.attendance;
      body.attendance = {
        create: create_attendance,
      };
    } else {
      delete body.attendance;
    }
    if (body?.exam?.length > 0) {
      const create_exam = body.exam;
      body.exam = {
        create: create_exam,
      };
    } else {
      delete body.exam;
    }
    if (body?.fee?.length > 0) {
      const create_fee = body.fee;
      body.fee = {
        create: create_fee,
      };
    } else {
      delete body.fee;
    }
    if (body?.timetable?.length > 0) {
      const create_timetable = body.timetable;
      body.timetable = {
        create: create_timetable,
      };
    } else {
      delete body.timetable;
    }
    const data = await prisma.school.create({
      data: body,
    });
    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
