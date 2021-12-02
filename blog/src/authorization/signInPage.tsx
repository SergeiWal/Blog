export type SignInPageProps = {
  user: string;
  setUser: (id: string) => void;
  clickHandler: () => void;
};

export default function SignInPage({
  user,
  setUser,
  clickHandler,
}: SignInPageProps) {
  return (
    <div className="signInForm">
      <form>
        <div className="formInput">
          <label>
            Username:
            <input
              type="text"
              placeholder="username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </label>
        </div>
        <button className="signInButton" onClick={clickHandler}>
          SIGN IN
        </button>
      </form>
    </div>
  );
}
