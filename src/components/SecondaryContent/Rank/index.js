import React from "react";

import { HorizontalLine } from "./style";

import { Text16Regular, Text14RegularInactive } from "../../Text";
import Tag from "../../Tag";

function RankContainer({ style, alunos, points, myId }) {
    const topFive = alunos.slice(0, 5);
    const myIndex = alunos.map(aluno => aluno.id).indexOf(myId);
    const me = alunos[myIndex];
    return (
        <div>
            <HorizontalLine>
                <Text14RegularInactive>Ranking da Semana</Text14RegularInactive>
                <Text14RegularInactive>pts/semana</Text14RegularInactive>
            </HorizontalLine>
            <HorizontalLine style={{ backgroundColor: 'var(--background-color)' }}>
                <Text16Regular>Os queridinho da sala</Text16Regular>
                <Tag>+{points}pts</Tag>
            </HorizontalLine>
            {
                topFive.map((aluno, index) => (
                    <HorizontalLine key={aluno.id} style={aluno.id === myId ? { backgroundColor: 'var(--background-color)' } : null}>
                        <Text16Regular>{index + 1}º {aluno.name}</Text16Regular>
                        <Text16Regular>{aluno.points}</Text16Regular>
                    </HorizontalLine>
                ))
            }{
                myIndex < 5 ? null : (
                    <>
                        <HorizontalLine>
                            <Text16Regular>...</Text16Regular>
                        </HorizontalLine>
                        <HorizontalLine style={{ backgroundColor: 'var(--background-color)' }}>
                            <Text16Regular>{myIndex + 1}º {me.name}</Text16Regular>
                            <Text16Regular>{me.points}</Text16Regular>
                        </HorizontalLine>
                    </>
                )
            }
        </div>
    );
}

export default RankContainer;
