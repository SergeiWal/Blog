import * as Yup from "yup";

const BaseAuthSchema = {
  username: Yup.string()
    .min(4, "Must be from 4 to 10 characters ")
    .max(10, "Must be from 4 to 10 characters ")
    .required("Required"),
  password: Yup.string()
    .min(4, "Must be from 4 to 10 characters ")
    .max(10, "Must be from 4 to 10 characters ")
    .required("Required"),
};

export const SignInSchema = Yup.object({
  ...BaseAuthSchema,
});

export const SignUpSchema = Yup.object({
  ...BaseAuthSchema,
  password_repeated: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
