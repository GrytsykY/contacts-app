import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MediaCard } from "../MediaCard";
import { GridList } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    //width: 500,
    height: 450,
    margin: 10,
  },
  mar: {
    margin: 10,
  },
}));

export const SpacingGrid = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList>
        {data.map((tile) => (
          <MediaCard
            className={classes.mar}
            key={tile.login.uuid}
            cols={tile.cols || 1}
            data={tile}
          />
        ))}
      </GridList>
    </div>
  );
};
