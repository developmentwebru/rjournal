import {
  Paper,
  TextField,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";

import { MainLayout } from "../../layouts/MainLayout";

export default function Settings() {
  return (
    <MainLayout hideComments>
      <Paper elevation={0} className="p-20">
        <Typography variant="h6">Основные настройки</Typography>
        <Divider className="mt-20 mb-30" />
        <form className="mt-20">
          <TextField
            className="mb-20"
            size="small"
            required
            fullWidth
            label="Никнэйм"
            variant="outlined"
          />
          <TextField
            className="mb-20"
            size="small"
            required
            fullWidth
            label="Эл. почта"
            variant="outlined"
          />
          <TextField
            className="mb-10"
            size="small"
            required
            fullWidth
            label="Пароль"
            variant="outlined"
          />
          <Divider className="mt-20 mb-20" />
          <Button color="primary" variant="contained">
            Сохранить изменения
          </Button>
        </form>
      </Paper>
    </MainLayout>
  );
}
