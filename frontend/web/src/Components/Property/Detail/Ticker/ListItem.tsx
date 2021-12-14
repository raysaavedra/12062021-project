import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { FC } from "react";
import { Property } from "../../../../Interface";

import { GreenArrow, RedArrow, DefaultArrow } from "../../../Shared/Icons";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "5px 70px",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
  },
  bold: {
    height: "19px",
    fontFamily: "Poppins !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "19px !important",
    letterSpacing: "0.782609px !important",
    color: "#171518 !important",
  },
  normal: {
    fontFamily: "Poppins !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "19px !important",
    letterSpacing: "0.782609px !important",
  },
  normal2: {
    color: "#484848 !important",
    fontFamily: "Poppins !important",
    fontStyle: "normal !important",
    fontWeight: "200 !important",
    fontSize: "18px !important",
    lineHeight: "19px !important",
    letterSpacing: "0.782609px !important",
  },
  icon: {
    width: "13px !important",
    height: "13px !important",
  },
  red: {
    color: "#E91C1C !important",
  },
  green: {
    color: "#00EB3E !important",
  },
  default: {
    color: "#8F8F8F !important",
  },
});

interface ListItemProps {
  property: Property;
}

export const ListItem: FC<ListItemProps> = ({ property }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box
      className={classes.container}
      onClick={() => navigate(`/property/${property.id}`)}
    >
      <Box display="flex" flexDirection="row">
        {!property.last_bid ? (
          <Box
            pr="5px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <DefaultArrow viewBox="0 0 10 20" className={classes.icon} />
          </Box>
        ) : null}
        {property.last_bid && property.last_bid > 0 ? (
          <Box
            pr="5px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <GreenArrow viewBox="0 0 15 14" className={classes.icon} />
          </Box>
        ) : null}
        {property.last_bid && property.last_bid < 0 ? (
          <Box
            pr="5px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <RedArrow viewBox="0 0 15 14" className={classes.icon} />
          </Box>
        ) : null}

        <Typography className={classes.bold}>{property.address}</Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          className={clsx({
            [classes.bold]: true,
            [classes.green]: property.last_bid && property.last_bid > 0,
            [classes.red]: property.last_bid && property.last_bid < 0,
          })}
        >
          {property.last_bid === 0
            ? "$"
            : property.last_bid < 0
            ? property.last_bid.toString().replace("-", "-$")
            : `$${property.last_bid}`}
        </Typography>
        <Box pl="15px">
          <Typography className={classes.normal2}>
            {`$${property.market_value}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
