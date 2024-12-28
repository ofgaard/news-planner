export const MenuItem = ({ icon: Icon, content, iconColor = "black" }) => {
  return (
    <div className="flex flex-row items-center gap-2 hover:bg-neutral-100 bg-opacity-65 w-full py-1">
      <Icon size={20} color={iconColor}></Icon>
      <p className="text-sm font-bo">{content}</p>
    </div>
  );
};
