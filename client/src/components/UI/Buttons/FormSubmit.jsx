export const FormSubmit = ({ isSubmitting, submitFunction, title }) => {
  return (
    <button
      disabled={isSubmitting}
      className="w-full px-3 py-2 text-neutral-100 text-xs bg-newsblue-500 rounded-md hover:bg-newsblue-600 disabled:bg-gray-400"
      type="submit"
      onClick={submitFunction}
    >
      {title || "Save"}
    </button>
  );
};
