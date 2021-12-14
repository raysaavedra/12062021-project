import { FC } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  gridContainer: {
    height: "100%",
    width: "100%",
  },
  normal: {
    fontFamily: "Poppins",
    fontStyle: "normal !important",
    fontWeight: "200 !important",
    fontSize: "18px !important",
    lineHeight: "27px !important",
    textAlign: "center",
    letterSpacing: "2px !important",
    color: "#484848 !important",
    padding: 0,
    margin: 0,
  },
  bold: {
    fontFamily: "Poppins !important",
    fontStyle: "normal !important",
    fontWeight: "300 !important",
    fontSize: "46px !important",
    lineHeight: "69px !important",
    textAlign: "center",
    letterSpacing: "2px !important",
    color: "#171518 !important",
    padding: 0,
    margin: 0,
    display: "inline",
    marginTop: "-10px",
    marginBottom: "-10px",
  },
});

interface HeaderTextItemProps {
  topText: string;
  middleText: string;
  bottomText: string;
  extraBottomIcon?: JSX.Element;
}

export const HeaderTextItem: FC<HeaderTextItemProps> = ({
  topText,
  middleText,
  bottomText,
  extraBottomIcon,
}) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.gridContainer}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <p className={classes.normal}>{topText}</p>
      <p className={classes.bold}>{middleText}</p>
      <p className={classes.normal}>{bottomText}</p>
      {extraBottomIcon && (
        <Box
          pt="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {extraBottomIcon}
        </Box>
      )}
    </Box>
  );
};
