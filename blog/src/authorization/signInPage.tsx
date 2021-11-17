export type SignInPageProps = {
  user: string;
  setUser: (id: string) => void;
  clickHandler: (id: string) => void;
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
            Id:
            <input
              type="text"
              placeholder="id"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </label>
        </div>
        <button className="signInButton" onClick={() => clickHandler(user)}>
          SIGN IN
        </button>
      </form>
    </div>
  );
}
