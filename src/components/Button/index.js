import React from "react";

import ButtonStyle from "./styles";

// import { Container } from './styles';

function Button({ children, color }) {
  return (
    <ButtonStyle style={{ backgroundColor: color }}>{children}</ButtonStyle>
  );
}

export default Button;
