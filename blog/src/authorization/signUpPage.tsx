import { Container, FormControl, Typography } from "@mui/material";
import { FormikErrors } from "formik";
import { BaseButton } from "../shared/button/styled";
import { AuthInput } from "../shared/input/styled";
import {
  AuthFormContainer,
  AuthFormFooter,
  AuthPageContainer,
  BlogLogo,
  ErrorMessage,
  SignUpLink,
} from "./styled";

export type SignUpPageProps = {
  username: string;
  password: string;
  password_repeated: string;
  server_error: string;
  errors: FormikErrors<any>;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
};

export default function SignUp({
  username,
  password,
  password_repeated,
  errors,
  server_error,
  handleChange,
  handleSubmit,
}: SignUpPageProps) {
  return (
    <AuthPageContainer>
      <Container>
        <BlogLogo>WSABlog</BlogLogo>
      </Container>
      <AuthFormContainer>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Typography>Username:</Typography>
            <AuthInput
              type="text"
              name="username"
              placeholder="Enter your name"
              value={username}
              onChange={handleChange}
              label={errors.username}
            />
          </FormControl>
          <FormControl>
            <Typography>Password:</Typography>
            <AuthInput
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChange}
              label={errors.password}
            />
          </FormControl>
          <FormControl>
            <Typography>Repeat password:</Typography>
            <AuthInput
              type="password"
              name="password_repeated"
              placeholder="Repeat your password"
              value={password_repeated}
              onChange={handleChange}
              label={errors.password_repeated}
            />
          </FormControl>

          <AuthFormFooter>
            {server_error ? <ErrorMessage>{server_error}</ErrorMessage> : null}
            <BaseButton type="submit">SIGN UP</BaseButton>
            <SignUpLink to={"/"}>SIGN IN</SignUpLink>
          </AuthFormFooter>
        </form>
      </AuthFormContainer>
    </AuthPageContainer>
  );
}
