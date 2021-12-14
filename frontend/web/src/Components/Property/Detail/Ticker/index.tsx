import { FC } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { Stat } from "./Stat";
import { List } from "./List";
import { useTicker } from "./useTicker";
import { useGetUserBids } from "./useGetUserBids";
import { Property } from "../../../../Interface";

const useStyles = makeStyles({
  container: {
    height: "60px",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
  },
  statsContainer: {
    width: "402px",
    background: "#FFFFFF",
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  statsGrid: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
  },
  listContainer: {
    width: "1756px",
    height: "60px",
    background: "rgba(255, 255, 255, 0.5)",
  },
  statsGridStart: {
    paddingLeft: "25px",
  },
});

interface TickerProps {
  property: Property;
}

export const Ticker: FC<TickerProps> = ({ property }) => {
  const classes = useStyles();
  const { properties } = useTicker(property.id);
  const { userBids } = useGetUserBids();

  return (
    <Box className={classes.container}>
      <Box className={classes.statsContainer}>
        <Box
          width="171px"
          className={`${classes.statsGrid} ${classes.statsGridStart}`}
        >
          <Stat name="Outbid" value={userBids.outbid} useRed />
        </Box>
        <Box width="140px" className={classes.statsGrid}>
          <Stat name="Active" value={userBids.active} useDefault />
        </Box>
        <Box width="91px" className={classes.statsGrid}>
          <Stat name="Winning" value={userBids.winning} useGreen />
        </Box>
      </Box>
      <Box className={classes.listContainer}>
        <List properties={properties} />
      </Box>
      <Box className={classes.statsContainer}>
        <Box
          width="159px"
          className={`${classes.statsGrid} ${classes.statsGridStart}`}
        >
          <Stat
            name="Winning"
            value={property.winning_bid}
            withDollar
            useGreen
          />
        </Box>
        <Box width="135px" className={classes.statsGrid}>
          <Stat
            name="Active"
            value={property.current_user_bid.active}
            useDefault
            withDollar
          />
        </Box>
        <Box width="108px" className={classes.statsGrid}>
          <Stat
            name="Outbid"
            value={property.current_user_bid.outbid}
            useRed
            withDollar
          />
        </Box>
      </Box>
    </Box>
  );
};
