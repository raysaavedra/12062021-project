import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import ListViewImg from "../../../../Assets/list-view.png";
import HouseBundleImg from "../../../../Assets/house-bundle.png";
import MapPinImg from "../../../../Assets/map-pin.png";
import WishlistImg from "../../../../Assets/wishlist.png";
import BlueHouseImg from "../../../../Assets/blue-house.png";
import { Property } from "../../../../Interface";
import { HeaderTextItem } from "./HeaderTextItem";

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
  clickable: {
    cursor: "pointer",
  },
});

interface HeaderProps {
  property: Property;
}

export const Header: FC<HeaderProps> = ({ property }) => {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Grid container className={classes.headerInnerContainer}>
        <Grid item className={classes.clickable}>
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
          <HeaderTextItem
            topText="Own"
            middleText={property.address}
            bottomText={`${property.city}, ${property.state} ${property.zip} `}
            extraBottomIcon={<img src={HouseBundleImg} alt="house" />}
          />
        </Grid>
        <Grid item className={classes.clickable}>
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
        <Grid
          item
          className={`${classes.textItemPadding} ${classes.clickable}`}
        >
          <HeaderTextItem
            topText="To"
            middleText="Start"
            bottomText="Place Deposit"
          />
        </Grid>
        <Grid item className={classes.clickable}>
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
          <HeaderTextItem
            topText={`Market Value $${property.market_value}`}
            middleText={`$${property.reserve_price}`}
            bottomText="Reserve Price"
          />
        </Grid>
        <Grid item className={classes.clickable}>
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
