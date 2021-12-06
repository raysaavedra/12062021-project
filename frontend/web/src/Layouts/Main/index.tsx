import { FC } from "react";
import { makeStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    padding: 0,
    flexGrow: 1,
  },
  box: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
  },
});

export const Main: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>{children}</main>
    </div>
  );
};
