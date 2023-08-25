import * as yup from 'yup';

export const attendanceValidationSchema = yup.object().shape({
  date: yup.date().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  school_id: yup.string().nullable().required(),
});
