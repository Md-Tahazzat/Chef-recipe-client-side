import React, { useContext, useState } from "react";
import "./Login.css";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../loading/Loading";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const { googleSing, gitHubSign, loginUser, loading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const navigation = useNavigation();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // all useState Hooks
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  if (navigation.state === "loading") return <Loading></Loading>;
  if (loading) return <Loading></Loading>;

  const handleLogIn = (e) => {
    e.preventDefault();
    setErrorMsg("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        form.reset();
        navigate(from);
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleSing()
      .then((result) => {
        navigate(from);
      })
      .catch((err) => setErrorMsg(err.message));
  };
  const handleGitHubLogin = () => {
    gitHubSign()
      .then((result) => {
        navigate(from);
      })
      .catch((err) => setErrorMsg(err.message));
  };

  console.log(location);
  console.log(from);

  return (
    <div className="login-form mx-auto pt-10 box-border min-h-[calc(100vh-121px)]  md:min-h-[calc(100vh-161px)] w-full md:w-3/6 lg:w-2/6">
      <form
        onSubmit={handleLogIn}
        className="rounded-lg shadow-lg bg-slate-50 px-5 py-1  md:border lg:border lg:border-slate-200 lg:shadow-lg"
      >
        <h1 className="my-5 text-center text-3xl font-bold text-blue-700  lg:text-4xl">
          Please LogIn
        </h1>
        <div className="input-box pt-5">
          <label htmlFor="text">Email</label>
          <input
            className="input-style focus:border-blue-400"
            autoComplete="off"
            type="email"
            required
            name="email"
          />

          {emailError && <p className="-mt-4 mb-10">{emailError}</p>}
        </div>
        <div className="input-box mt-[-15px]">
          <label htmlFor="password">Password</label>
          <input
            className="input-style focus:border-blue-400"
            autoComplete="off"
            type="password"
            required
            name="password"
          />

          {errorMsg && <p className="mt-2 mb-10 text-red-600">{errorMsg}</p>}

          {errorMsg && (
            <Link
              className="mt-2 mb-3 block w-32 text-blue-700 hover:underline "
              to="#"
            >
              forgot password?
            </Link>
          )}
        </div>

        <div className="pt-1 pb-5">
          <p>
            <small>
              Don't have an account?
              <NavLink
                state={{ from: from }}
                to="/register"
                className="font-bold ml-1 cursor-pointer text-blue-600 hover:text-blue-900"
              >
                Create account
              </NavLink>
            </small>
          </p>
          <input
            type="submit"
            className="hover:bg-blue-600 w-full mt-5 inline-block rounded bg-blue-500 py-1 px-3 text-white md:mr-10 lg:mr-10  lg:text-2xl"
            value="LogIn"
          />
        </div>
      </form>
      <div className="divider my-5 mx-5">OR</div>

      <div className="flex items-center justify-evenly mb-3">
        <p
          onClick={handleGoogleLogin}
          className="py-2 px-4 flex items-center text-slate-600 gap-3 bg-slate-300 rounded-md hover:bg-slate-400 font-bold"
        >
          <span>
            <FaGoogle />
          </span>
          Google
        </p>
        <p
          onClick={handleGitHubLogin}
          className="py-2 px-4 flex gap-3 text-slate-600 items-center bg-slate-300 rounded-md hover:bg-slate-400 font-bold"
        >
          <span>
            <FaGithub />
          </span>
          GitHub
        </p>
      </div>
    </div>
  );
};

export default Login;
