import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { Header } from "./Header";
import { Ticker } from "./Ticker";
import { Body } from "./Body";
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
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Header />
      <Ticker />
      <Body />
    </Box>
  );
};
