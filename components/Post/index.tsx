import React from "react";

import { Paper, Typography } from "@material-ui/core";
import Image from "next/image";

import styles from "./Post.module.scss";

export const Post: React.FC = () => {
  return (
    <Paper elevation={0} className="p-20" classes={{root: styles.paper}}>
      <Typography variant="h5" className={styles.title}>
        В твиттере «Хаббла» опубликовали первую фотографию в 2022 году —
        умирающая звезда в созвездии Ориона Статьи редакции
      </Typography>
      <Typography className="mt-15 mb-15">
        На фотографии — планетарная туманность NGC 2022, которая расположена в
        восьми тысячах световых лет от Земли. «Это просто умирающая звезда», —
        говорится в твиттере телескопа.
      </Typography>
      <Image
        height={500}
        width={600}
        src="https://leonardo.osnova.io/66ff8768-6f30-50f7-beb2-7855ba59c6eb/-/preview/300/-/format/webp/"
      />
    </Paper>
  );
};
