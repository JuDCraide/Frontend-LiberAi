import React from "react";

import { Text22Bold } from "../../Text";
import { CoursesContainer, MainContainer } from "./style";

function HorizontalContainer({ mainTitle, children }) {
  return (
    <MainContainer>
      <Text22Bold style={{ marginLeft: "22px" }}>{mainTitle}</Text22Bold>
      <CoursesContainer>{children}</CoursesContainer>
    </MainContainer>
  );
}

export default HorizontalContainer;
