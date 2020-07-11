import React, { useEffect, useState, Fragment } from "react";
import { Category } from "../Category";
// import LoaderIcon from "../LoaderIcon";

import { List, Item } from "./styles";

// Custom Hook. Repsonsable del Fetching de Datos. Actualiza las categorías.
function useCategoriesData() {
  // Estado Local
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch de Datos y actualiza el estado
  useEffect(function () {
    setLoading(true);
    fetch("https://petgram-server-hector.vercel.app/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  // Escuchamos el evento de Scroll para desplegar las categorias.
  useEffect(function () {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  });

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <Item key="loading">
          "Soy un cargando feo"
          {/* <LoaderIcon /> */}
        </Item>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
};
