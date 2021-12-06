import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    height: "60px",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
  },
  statsContainer: {
    width: "400px",
    background: "#FFFFFF",
  },
  statsGrid: {
    padding: "5px 30px",
  },
  listContainer: {
    background: "rgba(255, 255, 255, 0.5)",
  },
  bold: {
    fontWeight: 500,
    fontSize: "18px !important",
    color: "#171518",
  },
});

export const Ticker = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.statsContainer}>
        <Grid container className={classes.statsGrid}>
          <Grid item xs={4}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography className={classes.bold}>Outbid</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-left"
              padding={`${0} 32px`}
            >
              <Typography>4</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography className={classes.bold}>Active</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-left"
              padding={`${0} 32px`}
            >
              <Typography>4</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography className={classes.bold}>Winning</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-left"
              padding={`${0} 32px`}
            >
              <Typography>4</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.listContainer} flexGrow={1}></Box>
      <Box className={classes.statsContainer}>
        <Grid container className={classes.statsGrid}>
          <Grid item xs={4}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography className={classes.bold}>Winning</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-left"
              padding={`${0} 32px`}
            >
              <Typography>4</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography className={classes.bold}>Active</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-left"
              padding={`${0} 32px`}
            >
              <Typography>4</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography className={classes.bold}>Outbid</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-left"
              padding={`${0} 32px`}
            >
              <Typography>4</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
