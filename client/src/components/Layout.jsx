import { Sidenav } from "./Sidenav";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="flex w-screen">
      <div>
        <Sidenav></Sidenav>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
