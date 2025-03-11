export const FormSubmit = ({ isSubmitting, submitFunction }) => {
  return (
    <button
      disabled={isSubmitting}
      className="w-full px-3 py-2 text-neutral-100 text-xs bg-emerald-600 rounded-md hover:bg-emerald-700 disabled:bg-gray-400"
      type="submit"
      onClick={submitFunction}
    >
      Save
    </button>
  );
};
