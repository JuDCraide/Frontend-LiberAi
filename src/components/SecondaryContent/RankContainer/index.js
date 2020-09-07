import React from "react";

import { Title } from "./style";

import Container from '../../Container';
import { Text22Bold, Text18Regular } from "../../Text";

function RankContainer({ style, children }) {
    return (
        <Container>
            <Title style={style}>
                <Text22Bold style={{ width: '60%' }}>Turma dos Endividados</Text22Bold>
                <div style={{dispaly:'flex', flexDirection:'column', alignItems:'center'}}>
                    <Text18Regular>
                        <i className="tiny material-icons">person_outline</i>
                    </Text18Regular>
                    <Text18Regular>826</Text18Regular>
                </div>
            </Title>
            {children}
        </Container>
    );
}

export default RankContainer;
