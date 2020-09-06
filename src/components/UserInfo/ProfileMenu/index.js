
import React from 'react';

import { Text16Regular } from '../../Text';

import { MenuStyle } from './style';
import Divider from '../../Divider';

function ProfileMenu() {
    return (
        <MenuStyle>
            <Text16Regular>Meu Perfil</Text16Regular>
            <Divider />
            <Text16Regular>Minhas conquistas</Text16Regular>
            <Divider />
            <Text16Regular>Minha Jornada</Text16Regular>
            <Divider />
            <Text16Regular>Sair</Text16Regular>
        </MenuStyle>
    );
}

export default ProfileMenu;
