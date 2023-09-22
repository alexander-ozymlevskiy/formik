import { useController } from 'react-hook-form';

const getPasswordErrorMessage = (type) => {
  switch (type) {
    case "required":
      return "Password is required";
    case "min":
      return "Password must be at least 6 characters";
    default:
      return "";
  }
};

export const PasswordFormInput = () => {
  const { field, fieldState } = useController({ name: "password" });

  const {error} = fieldState;
  return (
    <div>
      <label>Password:</label>
      <input type="password" name="password" {...field} />
      {error?.type && (
        <p className="errMsg">
          {getPasswordErrorMessage(error?.type)}
        </p>
      )}
    </div>
  );
};