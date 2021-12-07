import { Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC } from "react";
import { Property } from "../../../../Interface";

import { ListItem } from "./ListItem";

const useStyles = makeStyles({
  stack: {
    padding: "0 20px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "5px 70px",
  },
  bold: {
    fontWeight: "500 !important",
    fontSize: "18px !important",
    color: "#171518",
  },
  normal: {
    fontWeight: "200 !important",
    fontSize: "18px !important",
    color: "#171518",
  },
  icon: {
    width: "9.81px",
    height: "19.19px",
  },
});

interface ListProps {
  properties: Property[];
}

export const List: FC<ListProps> = ({ properties }) => {
  const classes = useStyles();
  return (
    <Stack
      direction="row"
      className={classes.stack}
      spacing={10}
      alignItems="center"
      justifyContent="center"
    >
      {properties.map((p) => (
        <ListItem property={p} key={p.id} />
      ))}
    </Stack>
  );
};
