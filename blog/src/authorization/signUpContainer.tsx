import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { signUpAction } from "./actions/authorizeActions";
import SignUp from "./signUpPage";
import { SignUpSchema } from "./validationShemas";

export default function SignUpContainer() {
  const { requests } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [server_error, setError] = useState("");

  const formik = useFormik({
    initialValues: { username: "", password: "", password_repeated: "" },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      dispatch(
        signUpAction({
          name: values.username,
          password: values.password,
          photo: "",
        })
      );
    },
  });

  useEffect(() => {
    const key = signUpAction.type.replace("_REQUEST", "");
    if (requests[key] !== undefined && requests[key]) {
      setError("");
      formik.resetForm();
    } else {
      setError("Sign Up failed");
    }
  }, [requests]);

  return (
    <SignUp
      server_error={server_error}
      errors={formik.errors}
      username={formik.values.username}
      password={formik.values.password}
      password_repeated={formik.values.password_repeated}
      handleChange={formik.handleChange}
      handleSubmit={formik.handleSubmit}
    />
  );
}
