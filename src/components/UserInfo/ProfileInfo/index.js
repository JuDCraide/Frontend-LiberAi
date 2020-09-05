import React from 'react';

import { Text16Regular } from '../../Text';

import { Container, EditInfo } from './style';
import RadialProgressBar from './RadialProgressBar';

import profileImg from '../../../assets/AndressaProfile.jpg';

function ProfileInfo() {
  return (
    <Container>
      <RadialProgressBar
        percentage={50}
        src={profileImg}
        alt="Andressa Schinoff profile"
      ></RadialProgressBar>
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
