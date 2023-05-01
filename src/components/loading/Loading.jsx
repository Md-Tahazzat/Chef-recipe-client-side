import React from "react";

const Loading = () => {
  return (
    <div className="w-full min-h-[calc(100vh-121px)] md:min-h-[calc(100vh-161px)] text-4xl flex items-center justify-center">
      <div className="animate-spin w-8 h-8 rounded-full border-8 border-dotted border-blue-600"></div>
    </div>
  );
};

export default Loading;
