import * as yup from "yup";

export const userValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(8).required(),
});
