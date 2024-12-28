import { CgProfile } from "react-icons/cg";

import { CgMenu } from "react-icons/cg";
import { MenuButton } from "./UI/MenuButton";
export const Header = () => {
  return (
    <div>
      <div className="bg-neutral-900 w-screen text-neutral-200 flex justify-between items-center px-40 py-11">
        <h1 className="text-8xl">Logo</h1>
        <div className="flex gap-6 items-center">
          <MenuButton icon={CgProfile} text={"Profile"}></MenuButton>
          <MenuButton icon={CgMenu} text={"Menu"}></MenuButton>
        </div>
      </div>
    </div>
  );
};
