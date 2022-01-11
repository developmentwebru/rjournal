import React from "react";
import { Typography, IconButton, Menu, MenuItem } from "@material-ui/core";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./Comment.module.scss";

interface CommentProps {
  user: {
    fullName: string;
  };
  text: string;
  createdAt: string;
}

export const Comment: React.FC<CommentProps> = ({ user, text, createdAt }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <img
          src="http://batona.net/uploads/posts/2018-04/1524549377_01.jpg"
          alt="Avatar"
        />
        <b>Master Oogway</b>
        <span>{createdAt}</span>
      </div>
      <Typography className={styles.text}>
        «Роскосмос»: вероятность столкновения астероида Апофис с Землёй «очень и
        очень мала»
      </Typography>
      <span className={styles.replyBtn}>Ответить</span>
      <IconButton onClick={handleClick}>
        <MoreHorizIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        elevation={2}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </div>
  );
};
