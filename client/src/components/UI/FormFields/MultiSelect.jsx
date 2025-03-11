import Select from "react-select";

export const MultiSelect = ({ label, options, onChange }) => (
  <div className="form-group">
    {label && <label className="text-gray-700">{label}</label>}
    <Select
      options={options}
      isMulti
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={onChange}
    />
  </div>
);
