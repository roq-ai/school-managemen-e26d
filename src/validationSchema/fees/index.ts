import * as yup from 'yup';

export const feeValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  due_date: yup.date().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  school_id: yup.string().nullable().required(),
});
