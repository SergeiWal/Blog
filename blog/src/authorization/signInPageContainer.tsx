import { useFormik } from "formik";
import { useAppDispatch } from "../store/store";
import { signInAction } from "./actions/authorizeActions";
import SignInPage from "./signInPage";

export type SignInErrors = {
  username?: string;
  password?: string;
};

const validate = (values) => {
  const errors: SignInErrors = {};
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

  return errors;
};

export default function SignInPageContainer() {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validate,
    onSubmit: (values) => {
      localStorage.setItem("username", values.username);
      dispatch(
        signInAction({
          username: values.username,
          password: values.password,
        })
      );
    },
  });

  return (
    <SignInPage
      errors={formik.errors}
      username={formik.values.username}
      password={formik.values.password}
      handleChange={formik.handleChange}
      handleSubmit={formik.handleSubmit}
    />
  );
}
