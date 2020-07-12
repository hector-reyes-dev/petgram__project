import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from "./styles";

export const FavButton = ({ liked, likes, onClick }) => {
  // Un condicional del botón de like que muestra uno u otro icono.
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={onClick}>
      <Icon size="32px" /> {likes} likes!
    </Button>
  );
};
