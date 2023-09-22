import { useController } from 'react-hook-form';

export const NameFormInput = () => {
  const { field, fieldState } = useController({ name: "name" });

  const { error } = fieldState;

  return (
    <div>
    <label>Name:</label>
    <input type="text" name="name" {...field} />
    {error?.type === "required" && (
      <p className="errMsg">Name is required</p>
    )}
  </div>
);
}
