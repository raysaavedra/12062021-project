import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { Header } from "./Header";
import { Ticker } from "./Ticker";
import { Body } from "./Body";
import { useDetail } from "./useDetail";
import BackgroundImg from "../../../Assets/Property.jpg";

const useStyles = makeStyles({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundImage: `url(${BackgroundImg})`,
  },
});

export const Detail = () => {
  const { id } = useParams();
  const classes = useStyles();
  const { property } = useDetail(id);

  return (
    <Box className={classes.container}>
      <Header property={property} />
      <Ticker property={property} />
      <Body property={property} />
    </Box>
  );
};
