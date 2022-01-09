import React, { CSSProperties } from "react";

import { IconButton } from "@material-ui/core";

import {
  ModeCommentOutlined as CommentsIcon,
  RepeatOutlined as RepostIcon,
  BookmarkBorderOutlined as FavoriteIcon,
  ShareOutlined as ShareIcon,
} from "@mui/icons-material";

const styles: CSSProperties = {
  listStyle: "none",
  position: "relative",
  top: "5px",
  justifyContent: "space-between",
  padding: "0",
  margin: "0",
  display: "flex",
};

const PostAction: React.FC = () => {
  return (
    <ul style={styles}>
      <li>
        <IconButton>
          <CommentsIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <RepostIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </li>
    </ul>
  );
};

export default PostAction;
