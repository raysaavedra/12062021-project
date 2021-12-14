import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles({
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

interface StatProps {
  name: string;
  value: number;
  useDefault?: boolean;
  useRed?: boolean;
  useGreen?: boolean;
  withDollar?: boolean;
}

export const Stat: FC<StatProps> = ({
  name,
  value,
  useDefault,
  useRed,
  useGreen,
  withDollar,
}) => {
  const classes = useStyles();

  console.log(useRed, value, name);
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="flex-left">
        <Typography className={classes.bold}>{name}</Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="flex-left">
        <Typography
          className={clsx({
            [classes.bold]: true,
            [classes.red]: useRed,
            [classes.green]: useGreen,
            [classes.default]: useDefault,
          })}
        >
          {withDollar
            ? value < 0
              ? value.toString().replace("-", "$")
              : `$${value || 0}`
            : value || 0}
        </Typography>
      </Box>
    </>
  );
};
