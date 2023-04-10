import React, { useState, useEffect } from "react";

function PageSizeComponent() {
    /*
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const style = {
    height: `${height}px`,
    width: "100%",
    backgroundColor: "blue",
  };

  return <div style={style}>Este componente se ajusta al tamaño de la página.</div>;
  */
 return(
    <div>
        Pagina de Prueba de componente
    </div>
 )
}

export default PageSizeComponent;
