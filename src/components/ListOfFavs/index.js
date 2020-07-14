import React from "react";
import { Link, Grid, Image } from "./style";

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {favs.map((fav) => (
        <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Image key={fav.id} src={fav.src} />
        </Link>
      ))}
    </Grid>
  );
};
