import React from 'react';

import { Text22Bold, Text16RegularInactive } from '../../Text';
import { TagLevel } from '../../Tag'
import { UserInfoStyle } from './style';

function ProfileInfo({ name, level, levelName }) {
    return (
        <UserInfoStyle>
            <Text22Bold>{name}</Text22Bold>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <TagLevel
                    style={{ marginRight: 10 }}
                >
                    NV. {level}
                </TagLevel>
                <Text16RegularInactive>
                    {levelName}
                </Text16RegularInactive>
            </div>
        </UserInfoStyle>
    );
}

export default ProfileInfo;
