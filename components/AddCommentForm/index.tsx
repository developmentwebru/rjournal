import { Button, Input } from "@material-ui/core";
import React from "react";

import styles from "./AddCommentForm.module.scss";

export const AddCommentForm = () => {
  const [clicked, setClicked] = React.useState(false);
  const [text, setText] = React.useState("");

  const onAddComment = () => {
    setClicked(false);
    setText("");
  };
  return (
    <div className={styles.form}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => setClicked(true)}
        minRows={clicked ? 5 : 1}
        classes={{ root: styles.fieldRoot }}
        placeholder="Написать комментарий..."
        fullWidth
        multiline
      />
      {clicked && (
        <Button
          onClick={onAddComment}
          className={styles.addButton}
          variant="contained"
          color="primary"
        >
          Отправить
        </Button>
      )}
    </div>
  );
};
