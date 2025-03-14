import { ProfileIcon } from "./UI/ProfileIcon";
import { MenuItem } from "./UI/MenuItem";
import { MenuItemTopic } from "./UI/MenuItemTopic";
import { CgAdd } from "react-icons/cg";
import { CgSearch } from "react-icons/cg";
import { CgCalendarToday } from "react-icons/cg";
import { BiCalendarWeek } from "react-icons/bi";
import { PiUsersThree } from "react-icons/pi";
import { MenuLink } from "./UI/MenuLink";

export const Sidenav = ({ isOpen, toggleAddForm }) => {
  return (
    <>
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform fixed md:relative md:bg-neutral-100/40 bg-neutral-50 md:shadow-none shadow-lg min-h-screen min-w-72 pl-8 pr-4 py-3 flex flex-col gap-9`}
      >
        <ProfileIcon name="Oliver"></ProfileIcon>
        <div className="flex flex-col gap-1">
          <MenuItem
            icon={CgAdd}
            content="Add Story"
            iconColor="var(--color-newsblue-600"
            onClick={toggleAddForm}
          ></MenuItem>
          <MenuLink link={`/search/`} icon={CgSearch} label="Search"></MenuLink>
        </div>
        <div>
          <MenuLink
            link={"/"}
            icon={CgCalendarToday}
            label="Today"
            iconColor="var(--color-newsblue-600"
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
            iconColor="var(--color-newsblue-600"
          ></MenuLink>

          <ul className="pl-2 pt-2"></ul>
        </div>
        <div>
          <MenuLink
            link={`/users/all/`}
            icon={PiUsersThree}
            label="Reporters"
            iconColor="var(--color-newsblue-600"
          ></MenuLink>
        </div>
      </div>
    </>
  );
};
