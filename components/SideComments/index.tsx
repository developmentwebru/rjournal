import React from "react";
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined";

import styles from "./SideComments.module.scss";

export const comments = [
  {
    id: 1,
    user: {
      fullName: "Вася Пупкин",
      avatarUrl: "http://batona.net/uploads/posts/2018-04/1524549377_01.jpg",
    },
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
    post: {
      title: "Какая у вас дома ванна?",
    },
    createdAt: new Date().toString(),
  },
  {
    id: 2,
    user: {
      fullName: "Вася Пупкин",
      avatarUrl: "http://batona.net/uploads/posts/2018-04/1524549377_01.jpg",
    },
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
    post: {
      title: "Какая у вас дома ванна?",
    },
    createdAt: new Date().toString(),
  },
  {
    id: 3,
    user: {
      fullName: "Вася Пупкин",
      avatarUrl: "http://batona.net/uploads/posts/2018-04/1524549377_01.jpg",
    },
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
    post: {
      title: "Какая у вас дома ванна?",
    },
    createdAt: new Date().toString(),
  },
];

interface CommentItemProps {
  user: {
    fullName: string;
    avatarUrl: string;
  };
  text: string;
  post: {
    title: string;
  };
  createdAt: string;
}

const CommentItem: React.FC<CommentItemProps> = ({ user, text, post }) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img src={user.avatarUrl} />
        <a href="#">
          <b>{user.fullName}</b>
        </a>
      </div>
      <p className={styles.text}>{text}</p>
      <a href="#">
        <span className={styles.postTitle}>{post.title}</span>
      </a>
    </div>
  );
};

export const SideComments = () => {
  return (
    <div className={styles.root}>
      <h3>
        Комментарии <ArrowRightIcon />
      </h3>
      {comments.map((obj) => (
        <CommentItem {...obj} key={obj.id} />
      ))}
    </div>
  );
};
