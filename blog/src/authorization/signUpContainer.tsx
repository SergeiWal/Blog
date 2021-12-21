import { useFormik } from "formik";
import { useAppDispatch } from "../store/store";
import { signUpAction } from "./actions/authorizeActions";
import SignUp from "./signUpPage";

export type SignUpErrors = {
  username?: string;
  password?: string;
  password_repeated?: string;
};

const validate = (values) => {
  const errors: SignUpErrors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 10 && values.username.length < 4) {
    errors.username = "Must be from 4 to 10 characters ";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 10 && values.password.length < 4) {
    errors.username = "Must be from 4 to 10 characters ";
  }

  if (!values.password_repeated) {
    errors.password_repeated = "Required";
  } else if (
    values.password_repeated.length > 10 &&
    values.password_repeated.length < 4
  ) {
    errors.password_repeated = "Must be from 4 to 10 characters ";
  } else if (values.password_repeated !== values.password) {
    errors.password_repeated = "Passwords don't equels";
  }

  return errors;
};

export default function SignUpContainer() {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: { username: "", password: "", password_repeated: "" },
    validate,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        signUpAction({
          name: values.username,
          password: values.password,
          photo: "",
        })
      );
      resetForm();
    },
  });

  return (
    <SignUp
      errors={formik.errors}
      username={formik.values.username}
      password={formik.values.password}
      password_repeated={formik.values.password_repeated}
      handleChange={formik.handleChange}
      handleSubmit={formik.handleSubmit}
    />
  );
}
