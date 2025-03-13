import { FormCancel } from "../Buttons/FormCancel";
import { FormSubmit } from "../Buttons/FormSubmit";

export const ConfirmDelete = ({ isOpen, onCancel, onConfirm, story }) => {
  if (!isOpen) return;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex justify-center z-50 p-20">
        <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg max-h-[15vh] flex flex-col overflow-auto">
          <h1 className="font-bold text-gray-800">Delete story?</h1>
          <p>The story will be permanently deleted.</p>
          <div className="flex mt-auto ml-auto gap-2">
            <FormCancel action={onCancel}></FormCancel>
            <FormSubmit
              submitFunction={onConfirm}
              title={"Delete"}
            ></FormSubmit>
          </div>
        </div>
      </div>
    </>
  );
};
