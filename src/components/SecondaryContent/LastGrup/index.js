
import React from 'react';

import { Text16RegularInactive, Text20SemiBold } from '../../Text';
//import {TagDone} from '../../Tag';
import { LastGrupStyle, MainContent } from './style';

function LastGrup({ lastGrup, points }) {
    return (
        <LastGrupStyle>
            <Text16RegularInactive>
                Seu grupo na última semana
                </Text16RegularInactive>
            <MainContent>
                <Text20SemiBold
                    style={{ textAlign: 'center', marginBottom: 5 }}
                >
                    {lastGrup}
                </Text20SemiBold>
                {/*<TagDone  style={{marginBottom: 5}}>+{points}pts</TagDone>*/}
            </MainContent>
        </LastGrupStyle>
    );
}

export default LastGrup;
