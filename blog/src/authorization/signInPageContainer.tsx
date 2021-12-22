import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { signInAction } from "./actions/authorizeActions";
import SignInPage from "./signInPage";
import { SignInSchema } from "./validationShemas";

export default function SignInPageContainer() {
  const dispatch = useAppDispatch();
  const { requests } = useAppSelector((state) => state);
  const [server_error, setError] = useState("");

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      dispatch(
        signInAction({
          username: values.username,
          password: values.password,
        })
      );
    },
  });

  useEffect(() => {
    const key = signInAction.type.replace("_REQUEST", "");
    if (requests[key] !== undefined && !requests[key]) {
      setError("Sign In failed");
    } else {
      setError("");
    }
  }, [requests]);

  return (
    <SignInPage
      server_error={server_error}
      errors={formik.errors}
      username={formik.values.username}
      password={formik.values.password}
      handleChange={formik.handleChange}
      handleSubmit={formik.handleSubmit}
    />
  );
}
