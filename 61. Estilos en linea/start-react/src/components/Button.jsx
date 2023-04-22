import React from "react";

/* los estilos se escriben en camelCase, no se recomienda escribir en linea  */

const styles = {
  backgroundColor: "red",
  color: "#fff",
};

const Button = () => {
  return <button style={styles}>Click Me!</button>;
};

export default Button;
