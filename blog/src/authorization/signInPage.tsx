import { FormikErrors } from "formik";
import { Link } from "react-router-dom";

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
    <div className="signInForm">
      <form onSubmit={handleSubmit}>
        <div className="formInput">
          <label>
            Username:
            <br />
            <input
              type="text"
              name="username"
              placeholder="username"
              value={username}
              onChange={handleChange}
            />
          </label>
          {errors.username ? <div>{errors.username}</div> : null}
        </div>
        <div className="formInput">
          <label>
            Password:
            <br />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          {errors.password ? <div>{errors.password}</div> : null}
          {server_error ? <div>{server_error}</div> : null}
        </div>
        <button className="signInButton" type="submit">
          SIGN IN
        </button>
        <div className="formLink">
          <Link to={"/sign-up"}>SIGN UP</Link>
        </div>
      </form>
    </div>
  );
}
