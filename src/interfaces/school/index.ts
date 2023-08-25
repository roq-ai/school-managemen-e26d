import { AttendanceInterface } from 'interfaces/attendance';
import { ExamInterface } from 'interfaces/exam';
import { FeeInterface } from 'interfaces/fee';
import { TimetableInterface } from 'interfaces/timetable';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SchoolInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  attendance?: AttendanceInterface[];
  exam?: ExamInterface[];
  fee?: FeeInterface[];
  timetable?: TimetableInterface[];
  user?: UserInterface;
  _count?: {
    attendance?: number;
    exam?: number;
    fee?: number;
    timetable?: number;
  };
}

export interface SchoolGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
