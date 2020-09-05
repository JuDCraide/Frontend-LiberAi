import React from "react";

import { Text22Bold, Text18SemiBold } from "../Text";
import Button from "../Button";
import Tag from "../Tag";

import QuizzStyle, { QuizzTitleStyle } from "./styles";

function Quizz({ title, points }) {
  return (
    <QuizzStyle>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text22Bold style={{ marginRight: 10 }}>Quizz Relâmpago!</Text22Bold>
        <Tag color="var(--pink-color)">{points}</Tag>
      </div>
      <QuizzTitleStyle>
        <Text22Bold style={{ textAlign: "center", padding: "10px" }}>
          {title}
        </Text22Bold>
      </QuizzTitleStyle>
      <div style={{ textAlign: "center" }}>
        <Button color="var(--pink-color)">
          <Text18SemiBold style={{ color: "#fff", padding: "5px 10px" }}>
            Aceito o desafio!
          </Text18SemiBold>
        </Button>
      </div>
    </QuizzStyle>
  );
}

export default Quizz;
