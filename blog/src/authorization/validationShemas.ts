import * as Yup from "yup";

const BaseAuthSchema = {
  username: Yup.string()
    .min(4, "Must be from 4 to 20 characters ")
    .max(20, "Must be from 4 to 20 characters ")
    .matches(/^[A-Z-a-z_.\s]+$/, "Username can contain: [a-z-_.] and spaces")
    .required("Required"),
  password: Yup.string()
    .min(8, "Must be from 8 to 16 characters ")
    .max(16, "Must be from 8 to 16 characters ")
    .matches(/^[A-Za-z0-9]*$/, "Password can contain: [a-z0-9]")
    .matches(/^([A-Za-z]+)([A-Za-z0-9]*)$/, "Password should start with latter")
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
