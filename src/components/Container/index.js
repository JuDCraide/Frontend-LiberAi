import React from "react";


import ContainerStyle from "./styles";

function Container({style, children}) {
  return (
   <ContainerStyle style={style}>{children}</ContainerStyle>
  );
}

export default Container;
