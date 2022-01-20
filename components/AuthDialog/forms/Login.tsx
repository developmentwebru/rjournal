import { Button, TextField } from "@material-ui/core";
import React from "react";

interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  return (
    <div>
      <form className="mt-20">
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
    </div>
  );
};
