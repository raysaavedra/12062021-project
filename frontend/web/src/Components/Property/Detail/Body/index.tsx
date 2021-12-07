import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import LeftDialImg from "../../../../Assets/left-dial.png";
import RightDialImg from "../../../../Assets/right-dial.png";
import ForSaleSignImg from "../../../../Assets/for-sale-sign.png";
import { Property } from "../../../../Interface";

const useStyles = makeStyles({
  container: {
    backgroundColor: "transparent",
  },
  leftDial: {
    position: "absolute",
    left: 0,
    top: 617,
    cursor: "pointer",
  },
  rightDial: {
    position: "absolute",
    right: 0,
    top: 617,
    cursor: "pointer",
  },
  neighborContainer: {
    position: "absolute",
    left: 324,
    top: 763,
    cursor: "pointer",
  },
  neighborTxt: {
    color: "#6AC1FF",
    weight: "bold !important",
    fontSize: "18px !important",
  },
  forSaleContainer: {
    position: "absolute",
    left: 1059,
    top: 643,
  },
  publicAuction: {
    position: "absolute",
    left: 1105,
    top: 641,
    width: "346px",
    textAlign: "center",
  },
  publicAuctionTxt: {
    color: "#171518",
    fontSize: "23px !important",
    fontWeight: "bold !important",
  },
  publicAuctionInner: {
    position: "absolute",
    left: 1118,
    top: 710,
    width: "333px",
    textAlign: "center",
  },
  marketValueTxt: {
    color: "#171518",
    fontSize: "21px !important",
    fontWeight: "bold !important",
  },
  address1Txt: {
    color: "#171518",
    paddingTop: "20px",
    fontSize: "22px !important",
  },
  address2Txt: {
    color: "#171518",
    fontSize: "15px !important",
  },
  reserveBidTxt: {
    color: "#171518",
    paddingTop: "25px",
    fontSize: "14.4px !important",
  },
});

interface BodyProps {
  property: Property;
}

export const Body: FC<BodyProps> = ({ property }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container} flexGrow={1}>
      <Box className={classes.leftDial}>
        <img src={LeftDialImg} alt="left-dial" />
      </Box>
      <Box className={classes.rightDial}>
        <img src={RightDialImg} alt="right-dial" />
      </Box>
      <Box className={classes.neighborContainer}>
        <Typography className={classes.neighborTxt}>Neighbor?</Typography>
      </Box>
      <Box className={classes.forSaleContainer}>
        <img src={ForSaleSignImg} alt="for-sale-sign" />
      </Box>
      <Box className={classes.publicAuction}>
        <Typography className={classes.publicAuctionTxt}>
          Public Auction
        </Typography>
      </Box>
      <Box className={classes.publicAuctionInner}>
        <Typography className={classes.marketValueTxt}>
          {`Market Value $${property.market_value}`}
        </Typography>

        <Typography className={classes.address1Txt}>
          {property.address}
        </Typography>
        <Typography className={classes.address2Txt}>
          {`${property.city}, ${property.state} ${property.zip}`}
        </Typography>
        <Typography className={classes.reserveBidTxt}>
          {`Reserve Bid $${property.reserve_price}`}
        </Typography>
      </Box>
    </Box>
  );
};
