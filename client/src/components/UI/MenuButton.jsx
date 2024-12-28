export const MenuButton = ({ icon: Icon, text }) => {
  return (
    <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300 ease-in-out">
      <Icon size={30} />
      <p className="text-xs">{text}</p>
    </div>
  );
};
