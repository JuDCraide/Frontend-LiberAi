import React from 'react';

import { Text16Bold, Text14Regular, Text12Regular } from '../../Text';
import Tag, { TagLevel, TagDone } from '../../Tag'
import Check from '../../CheckButton'
import { LessonStyle, TagsStyle } from './style';

function Lesson({ done, tag, time, points, title, subtitle }) {
    return (
        <LessonStyle>
            <TagsStyle style={{ paddingBottom: 3 }}>
                <TagsStyle>
                    {done && <Check />}
                    <TagLevel style={{ textTransform: 'uppercase' }}>{tag}</TagLevel>
                    <Text14Regular>{time}</Text14Regular>
                </TagsStyle>
                {done ? <TagDone>{points}</TagDone>
                    : <Tag>{points}</Tag>
                }
            </TagsStyle>
            <div style={{paddingLeft:10}}>
                <Text16Bold>{title}</Text16Bold>
                <Text12Regular>{subtitle}</Text12Regular>
            </div>
        </LessonStyle >
    );
}

export default Lesson;
