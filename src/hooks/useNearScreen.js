import { useEffect, useState, useRef } from "react";

export function useNearScreen() {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  // Añadimos Lazyload a la aplicación.
  useEffect(
    function () {
      import("intersection-observer").then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0];
          console.log(isIntersecting);
          if (isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        });
        observer.observe(element.current);
      });
    },
    [element]
  );

  return [show, element];
}
