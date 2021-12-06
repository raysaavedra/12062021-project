import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import ListViewImg from "../../../../Assets/list-view.png";
import HouseBundleImg from "../../../../Assets/house-bundle.png";
import MapPinImg from "../../../../Assets/map-pin.png";
import WishlistImg from "../../../../Assets/wishlist.png";
import BlueHouseImg from "../../../../Assets/blue-house.png";

const useStyles = makeStyles({
  header: {
    height: "240px",
    backgroundColor: "transparent",
    width: "100%",
  },
  gridContainer: {
    height: "100%",
    width: "100%",
  },
  headerInnerContainer: {
    height: "100%",
    width: "100%",
    paddingLeft: "171px",
    paddingRight: "171px",
    background: "rgba(255, 255, 255, 0.85)",
  },
  textItemPadding: {
    width: "456px",
  },
});

export const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Grid container className={classes.headerInnerContainer}>
        <Grid item>
          <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="207px"
          >
            <img src={ListViewImg} alt="list-view" />
          </Box>
        </Grid>
        <Grid item className={classes.textItemPadding}>
          <Grid
            container
            direction="column"
            className={classes.gridContainer}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Typography>Own</Typography>
            </Grid>
            <Grid item>
              <Typography>14 Flood St.</Typography>
            </Grid>
            <Grid item>
              <Typography>New Orleans, LA 70122</Typography>
            </Grid>
            <Grid item>
              <Box
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <img src={HouseBundleImg} alt="house-bundle" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="199px"
          >
            <img src={MapPinImg} alt="map-pin" />
          </Box>
        </Grid>
        <Grid item className={classes.textItemPadding}>
          <Grid
            container
            direction="column"
            className={classes.gridContainer}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Typography>To</Typography>
            </Grid>
            <Grid item>
              <Typography>Start</Typography>
            </Grid>
            <Grid item>
              <Typography>Place Deposit</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="202px"
          >
            <img src={WishlistImg} alt="wishlist" />
          </Box>
        </Grid>
        <Grid item className={classes.textItemPadding}>
          <Grid
            container
            direction="column"
            className={classes.gridContainer}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Typography>Market Value $40,000</Typography>
            </Grid>
            <Grid item>
              <Typography>$5,000</Typography>
            </Grid>
            <Grid item>
              <Typography>Reserve Price</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="229px"
          >
            <img src={BlueHouseImg} alt="blue-house" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
