import { FC } from "react";
import { Box, Grid } from "@mui/material";
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
    width: "400px",
    background: "#FFFFFF",
  },
  statsGrid: {
    padding: "5px 23px",
  },
  listContainer: {
    background: "rgba(255, 255, 255, 0.5)",
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
        <Grid container className={classes.statsGrid}>
          <Grid item xs={4}>
            <Stat name="Outbid" value={userBids.outbid} useRed />
          </Grid>
          <Grid item xs={4}>
            <Stat name="Active" value={userBids.active} useDefault />
          </Grid>
          <Grid item xs={4}>
            <Stat name="Winning" value={userBids.winning} />
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.listContainer} flexGrow={1}>
        <List properties={properties} />
      </Box>
      <Box className={classes.statsContainer}>
        <Grid container className={classes.statsGrid}>
          <Grid item xs={4}>
            <Stat name="Winning" value={property.winning_bid} withDollar />
          </Grid>
          <Grid item xs={4}>
            <Stat
              name="Active"
              value={property.current_user_bid.active}
              useDefault
              withDollar
            />
          </Grid>
          <Grid item xs={4}>
            <Stat
              name="Outbid"
              value={property.current_user_bid.outbid}
              withDollar
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
