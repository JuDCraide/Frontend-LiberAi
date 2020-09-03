import React from "react";

import Button from "../Button";
import CheckButton from "../CheckButton";

import { Container, StatusContainer, ContentInfo, Title, Autor } from "./style";

function CourseContainer({ status, isChecked, duration, title, autor, pt }) {
  return (
    <Container>
      <h1>Nossos Cursos</h1>
      <StatusContainer>
        <span>
          {isChecked && <CheckButton />}
          {status}
        </span>
        <Button>{pt}</Button>
      </StatusContainer>
      <span>{duration}</span>
      <ContentInfo>
        <Title>{title}</Title>
        <Autor>{autor}</Autor>
      </ContentInfo>
    </Container>
  );
}

export default CourseContainer;
