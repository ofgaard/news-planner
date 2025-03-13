import { useState } from "react";
import { ProfileIcon } from "./UI/ProfileIcon";
import { MenuItem } from "./UI/MenuItem";
import { MenuItemTopic } from "./UI/MenuItemTopic";
import { AddForm } from "./Forms/AddForm";
import { CgAdd } from "react-icons/cg";
import { CgSearch } from "react-icons/cg";
import { CgCalendarToday } from "react-icons/cg";
import { BiCalendarWeek } from "react-icons/bi";
import { PiUsersThree } from "react-icons/pi";
import { MenuLink } from "./UI/MenuLink";

export const Sidenav = () => {
  const [addFormVisible, setAddFormVisible] = useState(false);

  const toggleForm = () => {
    setAddFormVisible((prev) => !prev);
  };

  return (
    <>
      <div
        className={`md:border-none bg-neutral-100/40 relative min-h-screen min-w-72 pl-8 pr-4 py-3 flex flex-col gap-9`}
      >
        <ProfileIcon name="Oliver"></ProfileIcon>
        <div className="flex flex-col gap-1">
          <MenuItem
            icon={CgAdd}
            content="Add Story"
            iconColor="darkgreen"
            onClick={toggleForm}
          ></MenuItem>
          <MenuLink link={`/search/`} icon={CgSearch} label="Search"></MenuLink>
        </div>
        <div>
          <MenuLink
            link={"/"}
            icon={CgCalendarToday}
            label="Today"
            iconColor="darkgreen"
          ></MenuLink>
          <ul className="pl-2 pt-2">
            <MenuItemTopic label={"Breaking"}></MenuItemTopic>
            <MenuItemTopic label={"Politik"}></MenuItemTopic>
            <MenuItemTopic label={"Krim"}></MenuItemTopic>
            <MenuItemTopic label={"Samfund"}></MenuItemTopic>
          </ul>
        </div>
        <div>
          <MenuLink
            link={`/week/`}
            icon={BiCalendarWeek}
            label="Week"
            iconColor="darkgreen"
          ></MenuLink>

          <ul className="pl-2 pt-2"></ul>
        </div>
        <div>
          <MenuLink
            link={`/users/all/`}
            icon={PiUsersThree}
            label="Reporters"
            iconColor="darkgreen"
          ></MenuLink>
        </div>
        {addFormVisible && <AddForm onClose={() => setAddFormVisible(false)} />}
      </div>
    </>
  );
};
