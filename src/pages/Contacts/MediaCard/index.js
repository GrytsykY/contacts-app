import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { NATIONALITIES_HUMAN_NAME } from "../../../constants/nationality";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: 5,
  },
  media: {
    height: 200,
  },
});

export const MediaCard = ({ data }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {/* {data.map((contact) => ( */}
      <CardActionArea key={data.login.uuid}>
        <CardMedia
          className={classes.media}
          image={data.picture.large}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.name.title} {data.name.first} {data.name.last}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>
              Age {data.dob.age} year, phone {data.phone}
            </b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Email: {data.email}</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Nationality: {NATIONALITIES_HUMAN_NAME[data.nat]}</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>
              Location: {data.location.city},&nbsp;
              {data.location.street.name}&nbsp;
              {data.location.street.number}
            </b>
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* ))} */}
    </Card>
  );
};
