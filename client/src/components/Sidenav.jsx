import { useState, useEffect } from "react";
import { useLocation } from "react-router";
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

export const Sidenav = () => {
  const [addFormVisible, setAddFormVisible] = useState(false);

  const toggleForm = () => {
    setAddFormVisible((prev) => !prev);
  };

  const closeForm = () => {
    setAddFormVisible(false);
  };

  return (
    <>
      <div
        className={`bg-opacity-35 md:border-none bg-neutral-100 relative min-h-screen min-w-72 pl-8 pr-4 py-3 flex flex-col gap-9`}
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
            link={`/week/`}
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
        {addFormVisible && <AddForm onClose={closeForm} />}
      </div>
    </>
  );
};
