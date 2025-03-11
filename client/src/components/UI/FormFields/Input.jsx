export const Input = ({ label, name, register, validation, type = "text" }) => (
  <div className="form-group">
    {label && <label className="text-gray-700">{label}</label>}
    <input
      {...register(name, validation)}
      type={type}
      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);
