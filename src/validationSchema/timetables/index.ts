import * as yup from 'yup';

export const timetableValidationSchema = yup.object().shape({
  day: yup.string().required(),
  period: yup.number().integer().required(),
  subject: yup.string().required(),
  user_id: yup.string().nullable().required(),
  school_id: yup.string().nullable().required(),
});
