import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";

const Root = () => {
  return (
    <div className="bg-slate-50">
      <Header></Header>
      <div className="max-w-[90rem] bg-slate-50 mx-auto px-2 md:px-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
