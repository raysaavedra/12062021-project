import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  bold: {
    fontWeight: "bold !important",
    fontSize: "18px !important",
    color: "#171518",
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

interface StatProps {
  name: string;
  value: number;
  useDefault?: boolean;
  useRed?: boolean;
  withDollar?: boolean;
}

export const Stat: FC<StatProps> = ({
  name,
  value,
  useDefault,
  useRed,
  withDollar,
}) => {
  const classes = useStyles();
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="flex-left">
        <Typography className={classes.bold}>{name}</Typography>
      </Box>
      <Box
        pl="3px"
        display="flex"
        alignItems="center"
        justifyContent="flex-left"
      >
        <Typography
          className={clsx({
            [classes.bold]: true,
            [classes.default]: useDefault,
            [classes.red]: useRed,
            [classes.green]: !useDefault && !useRed && value > 0,
            [classes.red]: !useDefault && !useRed && value < 0,
          })}
        >
          {withDollar
            ? value < 0
              ? value.toString().replace("-", "-$")
              : `$${value}`
            : value}
        </Typography>
      </Box>
    </>
  );
};
