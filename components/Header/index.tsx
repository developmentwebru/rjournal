import React from "react";

import { Paper, Button, IconButton, Avatar } from "@material-ui/core";
import {
  SearchOutlined as SearchIcon,
  CreateOutlined as PenIcon,
  Menu as MenuIcon,
  NotificationsOutlined as NotificationIcon,
  SmsOutlined as MessageIcon,
  ExpandMoreOutlined as ArrowBottomIcon,
  AccountCircleOutlined as UserIcon,
} from "@mui/icons-material";

import styles from "./Header.module.scss";
import Link from "next/link";
import { AuthDialog } from "../AuthDialog";

export const Header: React.FC = () => {
  const [authVisible, setAuthVisible] = React.useState(false);

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
            <svg viewBox="0 0 24 25" className={styles.logo} elevation={0}>
              <path fill="#e8a427" d="M0 19h8.5v6H0v-6z"></path>
              <path d="M0 7h8.5v18l6.5-6V7h9V0H0v7z"></path>
              <path fill="rgba(0,0,0,0,0.15)" d="M7.5 19h1v6l-1-6z"></path>
            </svg>
          </a>
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>
        <Link href="/write" passHref>
          <Button variant="contained" className={styles.penButton}>
            Новая запись
            <PenIcon />
          </Button>
        </Link>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        {/* <Link href="/profile/1">
          <a className="d-flex align-center">
            <Avatar
              className={styles.avatar}
              alt="Remy Sharp"
              src="http://batona.net/uploads/posts/2018-04/1524549377_01.jpg"
            />

            <ArrowBottomIcon />
          </a>
        </Link> */}
        <div className={styles.loginButton} onClick={openAuthDialog}>
          <UserIcon />
          Войти
        </div>
      </div>
      <AuthDialog onClose={closeAuthDialog} visible={authVisible} />
    </Paper>
  );
};
