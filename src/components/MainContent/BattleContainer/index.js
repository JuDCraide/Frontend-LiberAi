import React from "react";

import { Text22Bold, Text16Regular, Text20Bold } from "../../Text";
import RivalContainer from "./RivalContainer";
import Tag from "../../Tag";

import { Container, TitleContainer, ThemeContainer } from "./style";

function BattleContainer({ style, points }) {
  return (
    <Container style={style}>
      <TitleContainer>
        <Text22Bold style={{ marginRight: 10 }}>Batalha com amigo!</Text22Bold>
        <Tag color="var(--pink-color)">+{points}</Tag>
      </TitleContainer>
      <ThemeContainer>
        <Text16Regular style={{ textTransform: "uppercase" }}>
          Tema da semana
        </Text16Regular>
        <Text20Bold>Renda fixa e Renda Variável</Text20Bold>
      </ThemeContainer>
      <RivalContainer
        rival="Victória Godoy"
        description="Iniciante em Investimentos"
      />
      <RivalContainer
        rival="Letícia Bartolo"
        description="Novata das Dívidas"
      />
      <RivalContainer
        rival="Victória Godoy"
        description="Iniciante em Investimentos"
      />
      <RivalContainer
        rival="Letícia Bartolo"
        description="Novata das Dívidas"
      />
      <Text16Regular style={{ textAlign: "center", marginTop: "105px" }}>
        + ADICIONE AMIGO PARA BATALHAR
      </Text16Regular>
    </Container>
  );
}

export default BattleContainer;
