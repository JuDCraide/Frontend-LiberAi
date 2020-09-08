import React from 'react';

import { Text16Bold, Text14Regular, Text12Regular } from '../../Text';
import Tag, { TagLevel, TagDone } from '../../Tag'
import Check from '../../CheckButton'
import { LessonStyle, TagsStyle } from './style';
import Divider from '../../Divider'

function Lesson({ done, tag, time, points, title, subtitle }) {
    return (
        <LessonStyle>
            <TagsStyle>
                <TagsStyle style={{marginBottom: 5}}>
                    {done && <Check />}
                    <TagLevel style={{ textTransform: 'uppercase' }}>{tag}</TagLevel>
                    <Text14Regular>{time}</Text14Regular>
                </TagsStyle>
                {done ? <TagDone  style={{marginBottom: 5}}>{points}</TagDone>
                    : <Tag  style={{marginBottom: 5}}>{points}</Tag>
                }
            </TagsStyle>
            <div style={{paddingLeft:10}}>
                <Text16Bold>{title}</Text16Bold>
                <Text12Regular>{subtitle}</Text12Regular>
            </div>
            <Divider />
        </LessonStyle >
    );
}

export default Lesson;
