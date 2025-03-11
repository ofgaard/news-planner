export const Select = ({
  label,
  name,
  options,
  register,
  validation,
  onChange,
}) => (
  <div className="form-group">
    {label && <label className="text-gray-700">{label}</label>}
    <select
      {...register(name, validation)}
      onChange={onChange}
      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Select</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name || option}
        </option>
      ))}
    </select>
  </div>
);
