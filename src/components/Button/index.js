import React from "react";

import ButtonStyle from "./styles";

// import { Container } from './styles';

function Button({ children, color, funct }) {
  return (
    <ButtonStyle 
      onClick={() => funct()}
      style={{ backgroundColor: color }}
    >{children}</ButtonStyle>
  );
}

export default Button;
