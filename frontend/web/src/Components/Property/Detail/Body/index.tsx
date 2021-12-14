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
    width: "351.56px",
    height: "112.89px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  neighborTxt: {
    color: "#6AC1FF !important",
    fontFamily: "Poppins !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "27px !important",
    textAlign: "center",
    letterSpacing: "2px !important",
  },
  forSaleContainer: {
    position: "absolute",
    left: 1069,
    top: 643,
    bottom: 426,
    right: 1109,
    width: "382px",
    height: "371px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  publicAuction: {
    position: "absolute",
    left: 1105,
    top: 641,
    width: "346px",
    height: "30px",
    textAlign: "center",
  },
  publicAuctionTxt: {
    color: "#171518 !important",
    fontFamily: "Poppins !important",
    fontStyle: "normal !important",
    fontWeight: "300 !important",
    fontSize: "23px !important",
    lineHeight: "34px !important",
    textAlign: "center",
    letterSpacing: "1px !important",
  },

  marketValueTxt: {
    color: "#171518 !important",
    position: "absolute",
    width: "332.5px",
    height: "32px",
    left: 1118.22,
    right: 1109.28,
    top: 713.45,
    bottom: 694.55,
    fontFamily: "Poppins !important",
    fontStyle: "normal !important",
    fontWeight: "300 !important",
    fontSize: "21px !important",
    lineHeight: "31px !important",
    textAlign: "center",
    letterSpacing: "2.33333px !important",
  },
  addressContainer: {
    position: "absolute",
    height: "48px",
    width: "250px",
    left: 1158.72,
    right: 1177.28,
    top: 769.71,
    bottom: 622.29,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  address1Txt: {
    color: "#171518 !important",
    fontFamily: "Poppins !important",
    fontStyle: "normal !important",
    fontWeight: "200 !important",
    fontSize: "22px !important",
    lineHeight: "33px !important",
    textAlign: "center",
    letterSpacing: "1.83333px !important",
    padding: 0,
    margin: 0,
  },
  address2Txt: {
    color: "#171518 !important",
    fontFamily: "Poppins !important",
    fontStyle: "normal !important",
    fontWeight: "200 !important",
    fontSize: "15px !important",
    lineHeight: "33px !important",
    textAlign: "center",
    letterSpacing: "1.83333px !important",
    padding: 0,
    margin: 0,
  },
  reserveBidTxt: {
    position: "absolute",
    height: "22px",
    width: "334px",
    left: 1116.7,
    right: 1109.3,
    top: 838.73,
    bottom: 579.27,
    color: "#171518 !important",
    fontFamily: "Poppins !important",
    fontStyle: "normal !important",
    fontWeight: "200 !important",
    fontSize: "14.4px !important",
    lineHeight: "22px !important",
    textAlign: "center",
    letterSpacing: "1.6px !important",
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
      <Typography className={classes.marketValueTxt}>
        {`Market Value $${property.market_value}`}
      </Typography>

      <Box className={classes.addressContainer}>
        <p className={classes.address1Txt}>{property.address}</p>

        <p className={classes.address2Txt}>
          {`${property.city}, ${property.state} ${property.zip}`}
        </p>
      </Box>
      <Typography className={classes.reserveBidTxt}>
        {`Reserve Bid $${property.reserve_price}`}
      </Typography>
    </Box>
  );
};
