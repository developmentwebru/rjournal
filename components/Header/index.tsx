import React from "react";

import { Paper, Button, IconButton, Avatar } from "@material-ui/core";
import {
  SearchOutlined as SearchIcon,
  CreateOutlined as PenIcon,
  Menu as MenuIcon,
  SmsOutlined as NotificationIcon,
  NotificationsOutlined as MessageIcon,
  ExpandMoreOutlined as ArrowBottomIcon,
} from "@mui/icons-material";

import styles from "./Header.module.scss";
import Link from "next/link";

export const Header: React.FC = () => {
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

        <Button variant="contained" className={styles.penButton}>
          Новая запись
          <PenIcon />
        </Button>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <Link href="/profile/1">
          <a className="d-flex align-center">
            <Avatar
              className={styles.avatar}
              alt="Remy Sharp"
              src="http://batona.net/uploads/posts/2018-04/1524549377_01.jpg"
            />

            <ArrowBottomIcon />
          </a>
        </Link>
      </div>
    </Paper>
  );
};
