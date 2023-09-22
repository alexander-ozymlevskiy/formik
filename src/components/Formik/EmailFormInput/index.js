import { useController } from "react-hook-form";

export const EmailFormInput = () => {
  const { field, fieldState } = useController({ name: "email" });

  const { error } = fieldState;
  
  return (
    <div>
      <label>Email:</label>
      <input type="text" name="email" {...field} />
      {error?.type === "required" && (
        <p className="errMsg">Email is required</p>
      )}
      {error?.type === "email" && (
        <p className="errMsg">Email is not valid</p>
      )}
    </div>
  );
}
