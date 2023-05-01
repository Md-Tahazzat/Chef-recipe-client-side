import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../loading/Loading";

const Login = () => {
  const { user, loginUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // all useState Hooks
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  // all variables.
  const passwordRegEx = /^(?=.*\d.*\d).{8,}$/;
  const emailRegEx = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (loading) return <Loading></Loading>;

  const handleEmailChange = (e) => {
    if (!emailRegEx.test(e.target.value) || email !== "") {
      setEmailError("Please provide a valid email");
    } else {
      setEmailError("");
    }
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    if (!passwordRegEx.test(e.target.value) && !password === "") {
      console.log("inside paswordError");
      setPasswordError(
        "password must be at least 8 charecters containing 2 digits"
      );
    } else {
      setPasswordError("");
    }
    setPassword(e.target.value);
  };

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
        console.log(error.message);
        setErrorMsg(error.message);
      });
  };

  return (
    <div className="login-form mx-auto pt-10 box-border min-h-[calc(100vh-121px)]  md:min-h-[calc(100vh-161px)] w-full md:w-3/6 lg:w-2/6">
      <form
        onSubmit={handleLogIn}
        className="rounded-lg shadow-lg bg-slate-50 px-5 py-1  md:border lg:border lg:border-slate-200 lg:shadow-lg"
      >
        <h1 className="my-5 text-center text-3xl font-bold text-blue-700 dark:text-secondary lg:text-4xl">
          Please LogIn
        </h1>
        <div className="input-box pt-5">
          <input
            value={email}
            onChange={handleEmailChange}
            className={`input-style ${
              email
                ? `${emailError ? "border-red-400" : "border-green-400"}`
                : "focus:border-blue-400"
            }`}
            autoComplete="off"
            type="email"
            required
            name="email"
          />
          <label htmlFor="text">Email</label>
          {email && emailError && <p className="-mt-4 mb-10">{emailError}</p>}
        </div>
        <div className="input-box mt-[-15px]">
          <input
            className={`input-style ${
              password
                ? `${passwordError ? "border-red-400" : "border-green-400"}`
                : "focus:border-blue-400"
            }`}
            autoComplete="off"
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <label htmlFor="password">Password</label>
          {password && passwordError && (
            <p className="-mt-4 mb-10">{passwordError}</p>
          )}

          {errorMsg && (
            <Link
              className="mt-[-20px] mb-3 block w-32 text-blue-700 hover:underline dark:text-blue-400 "
              to="forgotPassword"
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
                to="/register"
                className="font-bold ml-1 cursor-pointer text-blue-600 hover:text-blue-900 dark:text-secondary dark:hover:text-blue-400"
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
    </div>
  );
};

export default Login;
