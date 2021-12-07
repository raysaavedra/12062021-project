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
  },
  bold: {
    fontWeight: "bold !important",
    fontSize: "18px !important",
    color: "#171518",
  },
  normal: {
    fontWeight: "200 !important",
    fontSize: "18px !important",
    color: "#171518",
  },
  icon: {
    width: "13px !important",
    height: "13px !important",
  },
  red: {
    color: "#E91C1C",
  },
  green: {
    color: "#00EB3E",
  },
  default: {
    color: "#8F8F8F",
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

        <Typography variant="body2" className={classes.bold}>
          {property.address}
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        pl="20px"
        pr="15px"
      >
        <Typography
          variant="body2"
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
          <Typography variant="body2" className={classes.normal}>
            {`$${property.market_value}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
