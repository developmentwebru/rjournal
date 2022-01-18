import Link from "next/link";
import React from "react";

import styles from "./SideComments.module.scss";

interface CommentItemProps {
  user: {
    id: number;
    fullName: string;
    avatarUrl: string;
  };
  text: string;
  post: {
    title: string;
  };
  createdAt: string;
}

export const CommentItem: React.FC<CommentItemProps> = ({
  user,
  text,
  post,
}) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img src={user.avatarUrl} alt="User avatar" />
        <Link href={`/profile/${user.id}`}>
          <a href="#">
            <b>{user.fullName}</b>
          </a>
        </Link>
      </div>
      <p className={styles.text}>{text}</p>
      <Link href={`/news/${user.id}`}>
        <a href="#">
          <span className={styles.postTitle}>{post.title}</span>
        </a>
      </Link>
    </div>
  );
};
