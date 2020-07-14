import React from "react";
import { Link, Image } from "./styles";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";

export const Category = ({
  cover = DEFAULT_IMAGE,
  path = "#",
  emoji = "?",
}) => (
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
);
