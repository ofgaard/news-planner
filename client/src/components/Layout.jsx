import { useState, useEffect } from "react";
import { Sidenav } from "./Sidenav";
import { Outlet } from "react-router";
import { AddForm } from "./Forms/AddForm";

export const Layout = () => {
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [addFormVisible, setAddFormVisible] = useState(false);

  const toggleSidenav = () => {
    setSidenavOpen((prev) => !prev);
  };

  const closeSideNav = (e) => {
    if (e.target.closest("a")) {
      setSidenavOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidenavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleForm = () => {
    setAddFormVisible((prev) => !prev);
  };

  return (
    <div className="flex w-screen">
      <div>
        <button
          className="md:hidden absolute right-4 text-3xl"
          onClick={toggleSidenav}
        >
          ☰
        </button>
        <Sidenav
          isOpen={sidenavOpen}
          toggle={toggleSidenav}
          close={closeSideNav}
          toggleAddForm={toggleForm}
        ></Sidenav>
        {addFormVisible && <AddForm onClose={() => setAddFormVisible(false)} />}
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
