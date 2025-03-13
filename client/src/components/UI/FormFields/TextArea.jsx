export const TextArea = ({ label, name, register, validation }) => (
  <div className="form-group">
    {label && <label className="text-gray-700">{label}</label>}
    <textarea
      {...register(name, validation)}
      className="w-full p-2 border rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-500"
    />
  </div>
);
