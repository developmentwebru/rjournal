import React from "react";

import { Button } from "@material-ui/core";
import {
  WhatshotOutlined as FireIcon,
  SmsOutlined as NotificationIcon,
  TrendingUpOutlined as RateIcon,
  FormatListBulletedOutlined as ListIcon,
} from "@mui/icons-material";

import styles from "./LeftMenu.module.scss";

export const LeftMenu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Button>
            <FireIcon />
            Лента
          </Button>
        </li>
        <li>
          <Button>
            <NotificationIcon />
            Сообщения
          </Button>
        </li>
        <li>
          <Button>
            <RateIcon />
            Рейтинг TJ
          </Button>
        </li>
        <li>
          <Button>
            <ListIcon />
            Подписки
          </Button>
        </li>
      </ul>
    </div>
  );
};
