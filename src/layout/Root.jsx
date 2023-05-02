import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const Root = () => {
  return (
    <div className="bg-slate-50">
      <Header></Header>
      <div className="max-w-[90rem] min-h-[calc(100vh-274px)] bg-slate-50 mx-auto px-2 md:px-5 md:min-h-[calc(100vh-323px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
