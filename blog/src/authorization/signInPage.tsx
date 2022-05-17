import { Container, FormControl, Typography } from "@mui/material";
import { FormikErrors } from "formik";
import { MainLetters } from "../header/styled";
import { BaseButton } from "../shared/button/styled";
import { AuthFormControl, AuthInput, AuthLabel } from "../shared/input/styled";
import {
  AuthFormContainer,
  AuthFormFooter,
  AuthPageContainer,
  BlogLogo,
  SignUpLink,
  ErrorMessage,
} from "./styled";

export type SignInPageProps = {
  username: string;
  password: string;
  errors: FormikErrors<any>;
  server_error: string;
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

export default function SignInPage({
  username,
  password,
  errors,
  server_error,
  handleChange,
  handleSubmit,
}: SignInPageProps) {
  return (
    <AuthPageContainer>
      <Container>
        <BlogLogo>
          <MainLetters>WSA</MainLetters>Blog
        </BlogLogo>
      </Container>
      <AuthFormContainer>
        <form onSubmit={handleSubmit}>
          <AuthFormControl>
            <AuthLabel>Username:</AuthLabel>
            <AuthInput
              type="text"
              name="username"
              placeholder="Enter your name"
              value={username}
              onChange={handleChange}
              label={errors.username}
            />
          </AuthFormControl>
          <AuthFormControl>
            <AuthLabel>Password:</AuthLabel>
            <AuthInput
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChange}
              label={errors.password}
            />
          </AuthFormControl>

          <AuthFormFooter>
            {server_error && <ErrorMessage>{server_error}</ErrorMessage>}
            <BaseButton type="submit">SIGN IN</BaseButton>
            <SignUpLink to={"/sign-up"}>SIGN UP</SignUpLink>
          </AuthFormFooter>
        </form>
      </AuthFormContainer>
    </AuthPageContainer>
  );
}
