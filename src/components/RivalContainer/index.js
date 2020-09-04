import React from "react";

import { Text20Regular, Text16Bold, Text14Regular } from "../Text";
import Button from "../Button";

import { Container } from "./style";

function RivalContainer({ description, rival }) {
  return (
    <Container>
      <div>
        <Text20Regular>{rival}</Text20Regular>
        <Text14Regular style={{ color: "#98B1CB" }}>
          {description}
        </Text14Regular>
      </div>
      <Button color="var(--pink-color)">
        <Text16Bold style={{ color: "#fff" }}>Batalhar</Text16Bold>
      </Button>
    </Container>
  );
}

export default RivalContainer;
