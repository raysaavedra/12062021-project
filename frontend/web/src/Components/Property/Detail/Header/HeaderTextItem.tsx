import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  gridContainer: {
    height: "100%",
    width: "100%",
  },
  normal: {
    fontSize: "18px !important",
    color: "#484848",
  },
  bold: {
    fontSize: "46px !important",
    fontWeight: "bold !important",
    color: "#171518",
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
    <Grid
      container
      direction="column"
      className={classes.gridContainer}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <Typography variant="body2" className={classes.normal}>
          {topText}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" className={classes.bold}>
          {middleText}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" className={classes.normal}>
          {bottomText}
        </Typography>
      </Grid>
      {extraBottomIcon && (
        <Grid item>
          <Box
            pt="10px"
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {extraBottomIcon}
          </Box>
        </Grid>
      )}
    </Grid>
  );
};
