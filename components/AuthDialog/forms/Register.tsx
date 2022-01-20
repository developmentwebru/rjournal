import { Button, TextField } from "@material-ui/core";
import React from "react";

interface RegisterFormProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onOpenRegister,
  onOpenLogin,
}) => {
  return (
    <div>
      <form className="mt-20">
        <TextField
          className="mb-20"
          size="small"
          required
          fullWidth
          label="Имя и фамилия"
          variant="outlined"
        />
        <TextField
          className="mb-20"
          size="small"
          required
          fullWidth
          label="Почта"
          variant="outlined"
        />
        <TextField
          className="mb-10"
          size="small"
          required
          fullWidth
          type="password"
          label="Пароль"
          variant="outlined"
        />
        <div className="d-flex align-center justify-between">
          <Button className="mt-10" color="primary" variant="contained">
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
    </div>
  );
};
