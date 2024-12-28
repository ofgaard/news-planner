import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className=" flex flex-col min-h-screen items-center">
      <Header></Header>
      <div className="flex-1 w-screen flex flex-col items-center">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};
