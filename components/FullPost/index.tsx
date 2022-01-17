import { Paper, Typography, Button } from "@material-ui/core";
import PostAction from "../PostActions";
import MessageIcon from "@mui/icons-material/TextsmsOutlined";
import UserAddIcon from "@mui/icons-material/PersonAddOutlined";
import styles from "./FullPost.module.scss";

export default function FullPost() {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div className="container">
        <Typography variant="h4" className={styles.title}>
          10 самых безумных историй 2021 года из мира финансов: деньги из
          ниоткуда и в никуда
        </Typography>
        <div>
          <Typography>
            2021 год был очень странным; но втройне странным он был для всех,
            кто хоть немного интересуется финансами и инвестициями. В этом
          </Typography>
          <Typography>
            В последние годы всем инвесторам было очевидно, что у китайского
            рынка наилучшие перспективы роста.
          </Typography>
          <Typography>
            А потом в 2021 году китайские власти внезапно взяли курс на жесткое
            регулирование в образовательном секторе, де-факто запретив компаниям
            получать прибыль.{" "}
          </Typography>
          <div style={{ width: 250, marginLeft: "-15px" }}>
            <PostAction />
          </div>
          <div className="d-flex justify-between align-center mt-30 mb-30">
            <div className={styles.userInfo}>
              <img
                src="http://batona.net/uploads/posts/2018-04/1524549377_01.jpg"
                alt="Avatar"
              />
              <b>Donnie Darko</b>
              <span>+1685</span>
            </div>
            <div>
              <Button variant="contained" className="mr-15">
                <MessageIcon />
              </Button>
              <Button variant="contained">
                <UserAddIcon />
                <b className="ml-10">Подписаться</b>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}
