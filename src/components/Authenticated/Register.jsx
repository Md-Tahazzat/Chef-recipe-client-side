import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import "./login.css";
import Loading from "../loading/Loading";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { googleSing, gitHubSign, createUser, loading } =
    useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState("");

  if (loading) return <Loading></Loading>;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    // console.log(name, photoURL);

    if (password !== confirmPassword) {
      setErrorMsg("password didn't match to confirm password");
      return;
    } else if (password.length < 6) {
      setErrorMsg("Your password should at least 6 charecters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        form.reset();
        navigate("/");
      })
      .catch((err) => {
        setErrorMsg(err.message);
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

  return (
    <div className="login-form mx-auto pt-10 box-border min-h-[calc(100vh-121px)]  md:min-h-[calc(100vh-161px)] w-full md:w-3/6 lg:w-2/6">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg bg-slate-50 px-5 py-2 md:border lg:border lg:border-slate-200  lg:shadow-lg"
      >
        <h1 className="my-2 text-center text-2xl md:text-3xl font-bold text-blue-700  lg:text-3xl">
          Please Register
        </h1>
        <div className="input-box pt-2">
          <label
            htmlFor="text"
            className="input-label pointer-events-none bg-slate-50"
          >
            Name
          </label>
          <input
            className="w-full rounded-md border bg-transparent py-1 px-4 text-xl focus:border-2 focus:border-blue-700 focus:outline-none"
            autoComplete="off"
            type="text"
            required
            name="name"
          />
        </div>
        <div className="input-box mt-[-15px]">
          <label
            htmlFor="text"
            className="input-label pointer-events-none bg-slate-50"
          >
            Email
          </label>
          <input
            className="w-full rounded-md border bg-transparent py-1 px-4 text-xl focus:border-2 focus:border-blue-700 focus:outline-none"
            autoComplete="off"
            type="email"
            required
            name="email"
          />
        </div>
        <div className="input-box mt-[-15px]">
          <label
            htmlFor="text"
            className="input-label pointer-events-none bg-slate-50"
          >
            PhotoURL
          </label>
          <input
            className="w-full border pl-1 my-2 rounded-lg focus:outline-none"
            autoComplete="off"
            type="file"
            name="photoURL"
          />
        </div>
        <div className="input-box mt-[-15px]">
          <label
            htmlFor="password"
            className="input-label pointer-events-none bg-slate-50"
          >
            Password
          </label>
          <input
            className="w-full rounded-md border bg-transparent py-1 px-4 text-xl focus:border-2 focus:border-blue-700 focus:outline-none"
            autoComplete="off"
            type="password"
            name="password"
            required
          />
        </div>
        <div className="input-box mt-[-15px]">
          <label
            htmlFor="password"
            className="input-label pointer-events-none bg-slate-50"
          >
            Confirm Password
          </label>
          <input
            className="w-full rounded-md border bg-transparent py-1 px-4 text-xl focus:border-2 focus:border-blue-700 focus:outline-none "
            autoComplete="off"
            type="password"
            name="confirmPassword"
            required
          />

          {errorMsg && <p className="text-red-400">{errorMsg}</p>}
        </div>

        <div className="pt-1 pb-5">
          <p>
            <small>
              Already have an account?
              <NavLink
                to="/login"
                className="font-bold ml-1 text-blue-600 hover:text-blue-900"
              >
                Login
              </NavLink>
            </small>
          </p>
          <input
            type="submit"
            className="hover:bg-blue-600 w-full mt-5 inline-block rounded bg-blue-500 py-1 px-3 text-white md:mr-10 lg:mr-10  lg:text-2xl"
            value="Register"
          />
        </div>
      </form>
      <div className="divider my-5 mx-5">OR</div>
      <div className="flex items-center justify-evenly my-5">
        <p
          onClick={handleGoogleLogin}
          className="py-2 px-4 bg-slate-300 rounded-md hover:bg-slate-400 font-bold"
        >
          Google
        </p>
        <p
          onClick={handleGitHubLogin}
          className="py-2 px-4 bg-slate-300 rounded-md hover:bg-slate-400 font-bold"
        >
          GitHub
        </p>
      </div>
    </div>
  );
};

export default Register;
