export const FormCancel = ({ action }) => {
  return (
    <button
      type="button"
      onClick={action}
      className="w-full px-3 py-2 font-bold text-neutral-600 text-xs
      bg-neutral-300 rounded-md hover:bg-neutral-400"
    >
      Cancel
    </button>
  );
};
