export const MenuItem = ({
  icon: Icon,
  content,
  iconColor = "black",
  onClick,
}) => {
  return (
    <div
      className="flex flex-row items-center gap-2 hover:bg-neutral-100 w-full py-1 cursor-pointer"
      onClick={onClick}
    >
      <Icon size={20} color={iconColor}></Icon>
      <p className="text-sm font-bo">{content}</p>
    </div>
  );
};
