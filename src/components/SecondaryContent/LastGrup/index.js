
import React from 'react';

import { Text16RegularInactive, Text20SemiBold } from '../../Text';
import {TagDone} from '../../Tag';
import { LastGrupStyle, MainContent } from './style';

function LastGrup({ lastGrup, points }) {
    return (
        <LastGrupStyle>

            <Text16RegularInactive
                style={{ marginRight: 5 }}
            >
                Seu grupo na última semana
                </Text16RegularInactive>
            <MainContent>
                <Text20SemiBold
                    style={{ textAlign: 'center' }}
                >
                    {lastGrup}
                </Text20SemiBold>
                <TagDone>+{points}pts</TagDone>
            </MainContent>
        </LastGrupStyle>
    );
}

export default LastGrup;
