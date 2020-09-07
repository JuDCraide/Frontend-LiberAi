import React from 'react';

import { Text20Bold } from '../../Text';
import { LessonsStyle } from './styles';

function Lessons({ title, children }) {
    return (
        <LessonsStyle>
            <Text20Bold style={{ marginBotton:8 }}>{title}</Text20Bold>
            {children}
        </LessonsStyle >
    );
}

export default Lessons;
