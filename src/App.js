import { useForm, FormProvider } from "react-hook-form";
import "./App.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { EmailFormInput } from "./components/Formik/EmailFormInput";
import { PasswordFormInput } from "./components/Formik/PasswordFormInput";
import { NameFormInput } from "./components/Formik/NameFormInput";

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

function App() {
  const formMethods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { handleSubmit, reset } = formMethods;

  const tryToLoginUser = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="form">
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(tryToLoginUser)}>
          <h1 style={{ marginBottom: "20px" }}>Login</h1>
          <NameFormInput />
          <EmailFormInput />
          <PasswordFormInput />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </div>
  );
}

export default App;
