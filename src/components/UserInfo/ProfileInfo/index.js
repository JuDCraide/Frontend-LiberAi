import React from "react";

import { Text16Regular } from "../../Text";

import { Container, ImgContainer, EditInfo } from "./style";

function ProfileInfo() {
  return (
    <Container>
      <ImgContainer />
      <EditInfo>
        <Text16Regular>Meu Perfil</Text16Regular>
        <Text16Regular>Minhas conquistas</Text16Regular>
        <Text16Regular>Minha Jornada</Text16Regular>
        <Text16Regular>Sair</Text16Regular>
      </EditInfo>
    </Container>
  );
}

export default ProfileInfo;
