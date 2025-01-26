import { useState } from "react";
import { ProfileIcon } from "./UI/ProfileIcon";
import { MenuItem } from "./UI/MenuItem";
import { MenuListItem } from "./UI/MenuListItem";
import { AddForm } from "./AddForm";
import { CgAdd } from "react-icons/cg";
import { CgSearch } from "react-icons/cg";
import { CgCalendarToday } from "react-icons/cg";
import { CgCalendarDates } from "react-icons/cg";
import { PiUsersThree } from "react-icons/pi";
import { MenuLink } from "./UI/MenuLink";
import { useGetWeekByDate } from "../hooks/useGetWeekByDate";

export const Sidenav = () => {
  const { weekStartDate } = useGetWeekByDate();
  const [addFormVisible, setAddFormVisible] = useState(false);
  const [sideNavVisible, setSideNavVisible] = useState(true);

  const toggleForm = () => {
    setAddFormVisible((prev) => !prev);
    console.log(addFormVisible);
  };

  const toggleSideNavForMobile = () => {
    setSideNavVisible((prev) => !prev);
  };

  const autoToggleMobileNav = () => {
    window.innerWidth >= 768 && setSideNavVisible(false);
  };

  window.addEventListener("resize", autoToggleMobileNav);

  return (
    <>
      <button
        className={`flex md:hidden ${sideNavVisible && "hidden"} pt-2 pl-2`}
        onClick={toggleSideNavForMobile}
      >
        click me
      </button>
      <div
        className={`md:bg-opacity-35 bg-white border-r md:border-none md:bg-neutral-100 ${
          !sideNavVisible && "hidden"
        } fixed md:relative min-h-screen min-w-72 pl-8 pr-4 py-3 md:flex flex-col gap-9`}
      >
        <ProfileIcon name="Oliver"></ProfileIcon>
        <div className="flex flex-col gap-1">
          <MenuItem
            icon={CgAdd}
            content="Add Story"
            iconColor="darkgreen"
            onClick={toggleForm}
          ></MenuItem>
          <MenuItem icon={CgSearch} content="Search"></MenuItem>
        </div>
        <div>
          <MenuLink
            link={"/"}
            icon={CgCalendarToday}
            label="Today"
            iconColor="darkgreen"
          ></MenuLink>
          <ul className="pl-2 pt-2">
            <MenuListItem content="Breaking"></MenuListItem>
            <MenuListItem content="Politik"></MenuListItem>
            <MenuListItem content="Krim"></MenuListItem>
            <MenuListItem content="Samfund"></MenuListItem>
          </ul>
        </div>
        <div>
          <MenuLink
            link={`/week/${weekStartDate}`}
            icon={CgCalendarDates}
            label="Week"
            iconColor="darkgreen"
          ></MenuLink>
          <ul className="pl-2 pt-2">
            <MenuListItem content="Breaking"></MenuListItem>
            <MenuListItem content="Politik"></MenuListItem>
            <MenuListItem content="Krim"></MenuListItem>
            <MenuListItem content="Samfund"></MenuListItem>
          </ul>
        </div>
        <div>
          <MenuItem
            icon={PiUsersThree}
            content="Reporters"
            iconColor="darkgreen"
          ></MenuItem>
        </div>
        {addFormVisible && <AddForm />}
      </div>
    </>
  );
};
