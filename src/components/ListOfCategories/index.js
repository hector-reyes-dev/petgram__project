import React, { useEffect, useState, Fragment } from "react";
import { Category } from "../Category";

import { List, Item } from "./styles";
// import { categories as mockCategories } from "../../../api/db.json";

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(function () {
    fetch("https://petgram-server-hector.vercel.app/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      });
  }, []);

  useEffect(function () {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  });

  const renderList = (fixed) => (
    <List className={fixed ? "fixed" : ""}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
};
