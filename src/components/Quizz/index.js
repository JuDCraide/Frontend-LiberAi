import React from "react";

import { Text22Bold, Text12Bold, Text18SemiBold } from "../Text";
import Button from "../Button";

function Quizz() {
  return (
    <div
      style={{
        marginTop: "150px",
        marginLeft: "40px",
        width: "374px",
        height: "224px",
      }}
    >
      <div style={{ display: "flex", alignContent: "space-around" }}>
        <Text22Bold style={{ marginRight: "83px" }}>
          Quizz Relâmpago!
        </Text22Bold>
        <Button color="var(--pink-color)">
          <Text12Bold style={{ color: "#fff" }}>+500pt</Text12Bold>
        </Button>
      </div>
      <Text22Bold style={{ marginTop: "30px", textAlign: "center" }}>
        Você sabe tudo
      </Text22Bold>
      <Text22Bold style={{ textAlign: "center" }}>sobre Juros?!</Text22Bold>
      <div style={{ textAlign: "center", marginTop: "27px" }}>
        <Button color="var(--pink-color)">
          <Text18SemiBold style={{ color: "#fff", padding: "5px 10px" }}>
            Aceito o desafio!
          </Text18SemiBold>
        </Button>
      </div>
    </div>
  );
}

export default Quizz;
