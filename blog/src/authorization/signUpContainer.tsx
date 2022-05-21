import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { signUpAction } from "./actions/authorizeActions";
import SignUp from "./signUpPage";
import { SignUpSchema } from "./validationShemas";

export default function SignUpContainer() {
  const { requests, signUp } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [server_error, setError] = useState("");
  const history = useHistory();
  const [submited, setSubmitted] = useState(false);

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
      setSubmitted(true);
    },
  });

  useEffect(() => {
    const key = signUpAction.type.replace("_REQUEST", "");
    if (requests[key] !== undefined && requests[key]) {
      setError("");
      formik.resetForm();
    } else if (submited) {
      setError("Sign Up failed");
    }
  }, [requests]);

  useEffect(() => {
    const key = signUpAction.type.replace("_REQUEST", "");

    if (requests[key] && signUp && submited) {
      history.push("/login");
    }
  }, [requests, signUp, submited]);

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
