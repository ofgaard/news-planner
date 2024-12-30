export const FormButton = ({ text, color, formId, textColor }) => {
  return (
    <>
      <button
        className={`border py-1 px-3 text-xs rounded-md ${color} ${textColor} hover:bg-opacity-50`}
        form={formId}
      >
        {text}
      </button>
    </>
  );
};
