import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@mui/icons-material/AddOutlined";
import CheckIcon from "@mui/icons-material/CheckOutlined";
import styles from "./FollowButton.module.scss";

export const FollowButton: React.FC = () => {
  const [followed, setFollowed] = React.useState(false);
  return (
    <Button
      onClick={() => {
        setFollowed(!followed);
      }}
      variant="contained"
      style={{ minWidth: 30, width: 35, height: 35 }}
    >
      {followed ? <AddIcon /> : <CheckIcon style={{ color: "#2ea83a" }} />}
    </Button>
  );
};
