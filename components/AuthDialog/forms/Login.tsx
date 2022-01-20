import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { LoginFormSchema } from "../../../utils/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormField } from "../../FormField";
interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data: any) => console.log(data);
  return (
    <div>
      <FormProvider {...form}>
        <form className="mt-20" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name="email" label="Почта" />
          <FormField name="password" label="Введите пароль" />

          <div className="d-flex align-center justify-between">
            <Button
              disabled={!form.formState.isValid}
              type="submit"
              className="mt-10"
              color="primary"
              variant="contained"
            >
              Войти
            </Button>
            <Button
              onClick={onOpenRegister}
              className="ml-10"
              color="primary"
              variant="text"
            >
              Регистрация
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
