
import React from 'react';

import { Text16RegularInactive, Text20SemiBold } from '../../Text';
import { NextLevel, Header } from './style';

function NextLevelInfo({ nextLevel, prize }) {
    return (
        <NextLevel>
            <Header>
                <Text16RegularInactive
                    style={{ marginRight: 5 }}
                >
                    Próxima conquista
                </Text16RegularInactive>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Text16RegularInactive>
                        <i className="tiny material-icons">lock_outline</i>
                    </Text16RegularInactive>
                    <Text16RegularInactive>
                        Nível {nextLevel}
                    </Text16RegularInactive>
                </div>
            </Header>
            <Text20SemiBold
                style={{ textAlign: 'center' }}
            >
                {prize}
            </Text20SemiBold>
        </NextLevel>
    );
}

export default NextLevelInfo;
