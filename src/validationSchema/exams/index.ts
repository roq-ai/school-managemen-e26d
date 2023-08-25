import * as yup from 'yup';

export const examValidationSchema = yup.object().shape({
  name: yup.string().required(),
  date: yup.date().required(),
  total_marks: yup.number().integer().required(),
  obtained_marks: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  school_id: yup.string().nullable().required(),
});
