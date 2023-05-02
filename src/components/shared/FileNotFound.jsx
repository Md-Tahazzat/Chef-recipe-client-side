import React from "react";
import { Link, useNavigation, useRouteError } from "react-router-dom";
import Loading from "../loading/Loading";

const FileNotFound = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") return <Loading></Loading>;
  const error = useRouteError();
  return (
    <div className="min-h-[calc(100vh-121px)] font-bold w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl text-center md:text-4xl text-slate-500">
        <img
          className="w-96 mx-auto mb-5"
          src="https://static.vecteezy.com/system/resources/previews/006/549/647/original/404-landing-page-free-vector.jpg"
          alt=""
        />
        {error?.status} <br />
        {error?.statusText}
      </h1>
      <p className="mt-2 ">{error?.data}</p>

      <Link className="py-2 px-5 mt-5 text-blue-600" to="/">
        Go to <span className="underline">Home</span>
      </Link>
    </div>
  );
};

export default FileNotFound;
