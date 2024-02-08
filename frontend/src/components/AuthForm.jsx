import {
  Link,
  Form,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";

const AuthForm = () => {
  const data = useActionData();
  const navigation = useNavigation();

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <section className="form-section">
        <div>
          <p>{isLogin ? "Login to u r account" : "Create u r new account"}</p>
          {data && data.errors && (
            <ul>
              {Object.values(data.errors).map((err) => {
                <li key={err}>{err}</li>;
              })}
            </ul>
          )}

          {data && data.message && <p>{data.message}</p>}
          <Form method="post">
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="enter email"
                required
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="enter password"
                required
              />
            </div>
            <button className="btn login-btn" disabled={isSubmitting}>
              {isSubmitting ? "SUBMITTING" : isLogin ? "Login" : "Create"}
            </button>
          </Form>
          {isLogin ? (
            <p className="create-acc">
              Hey NIGGA ! <br />
              Don't have an account ?{" "}
              <Link to={"/auth?mode=signup"}>Register here</Link>
            </p>
          ) : (
            <p className="create-acc">
              Hey MOTHERFUCKER ! <br />
              Already have an account ?{" "}
              <Link to={"/auth?mode=login"}>Login here</Link>
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default AuthForm;
