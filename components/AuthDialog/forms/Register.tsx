import { Button, TextField } from "@material-ui/core";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormField } from "../../FormField";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormSchema } from "../../../utils/validations";
interface RegisterFormProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onOpenRegister,
  onOpenLogin,
}) => {
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = (data: any) => console.log(data);
  return (
    <div>
      <FormProvider {...form}>
        <form className="mt-20" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name="fullname" label="Имя и фамилия" />
          <FormField name="email" label="Почта" />
          <FormField name="password" label="Пароль" />
          <div className="d-flex align-center justify-between">
            <Button
              disabled={!form.formState.isValid}
              type="submit"
              className="mt-10"
              color="primary"
              variant="contained"
            >
              Зарегистрироваться
            </Button>
            <Button
              onClick={onOpenLogin}
              className="ml-10"
              color="primary"
              variant="text"
            >
              Войти
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
