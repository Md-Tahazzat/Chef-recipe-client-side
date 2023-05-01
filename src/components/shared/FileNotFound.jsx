import React from "react";

const FileNotFound = () => {
  return (
    <div className="min-h-[calc(100vh-121px)] font-bold w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl text-center md:text-4xl text-slate-500">
        <img
          src="https://static.vecteezy.com/system/resources/previews/006/549/647/original/404-landing-page-free-vector.jpg"
          alt=""
        />
        404 <br />
        File Not Found
      </h1>
    </div>
  );
};

export default FileNotFound;
