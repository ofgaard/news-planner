import { Link } from "react-router";

export const MenuLink = ({ link, icon: Icon, iconColor = "black", label }) => {
  return (
    <Link
      to={link}
      className="flex flex-row items-center gap-2 hover:bg-neutral-100 bg-opacity-65 w-full py-1"
    >
      {Icon && <Icon size={20} color={iconColor} />}
      <p className="text-sm font-bold">{label}</p>
    </Link>
  );
};
