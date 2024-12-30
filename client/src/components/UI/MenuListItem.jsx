export const MenuListItem = ({ content }) => {
  return (
    <div className="flex flex-row items-center gap-2 hover:bg-neutral-100 bg-opacity-65 w-full py-1">
      <p className="text-xs"> {content}</p>
    </div>
  );
};
