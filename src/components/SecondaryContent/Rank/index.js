import React from "react";

import { HorizontalLine } from "./style";

import { Text16Regular, Text14RegularInactive } from "../../Text";
//import Tag from "../../Tag";
import Divider from "../../Divider";

function RankContainer({ style, alunos, points, myId }) {
    const topTen = alunos.slice(0, 10);
    const myIndex = alunos.map(aluno => aluno._id).indexOf(myId);
    //console.log(myId);
    const me = alunos[myIndex];
    return (
        <div>
            <HorizontalLine>
                <Text14RegularInactive
                    style={{ marginRight: 8 }}
                >Ranking da Semana</Text14RegularInactive>
                <Text14RegularInactive>pts/semana</Text14RegularInactive>
            </HorizontalLine>
            <HorizontalLine style={{ backgroundColor: 'var(--background-color)' }}>
                <Text16Regular
                    style={{ textTransform: 'uppercase', marginRight: 8 }}
                >Os queridinho da sala</Text16Regular>
                {/*<Tag>+{points}pts</Tag>*/}
            </HorizontalLine>
            {
                topTen.map((aluno, index) => (
                    <div key={aluno._id}>
                        <HorizontalLine key={aluno._id} style={aluno._id === myId ? { backgroundColor: 'var(--background-color)' } : null}>
                            <Text16Regular
                                style={{ marginRight: 8 }}
                            >{index + 1}º {aluno.name}</Text16Regular>
                            <Text16Regular>+{aluno.score}pts</Text16Regular>
                        </HorizontalLine>
                        <Divider />
                    </div>
                ))
            }{
                myIndex < 10 ? null : (
                    <>
                        <HorizontalLine>
                            <Text16Regular>...</Text16Regular>
                        </HorizontalLine>
                        <Divider />
                        <HorizontalLine style={{ backgroundColor: 'var(--background-color)' }}>
                            <Text16Regular
                                style={{ marginRight: 8 }}
                            >{myIndex + 1}º {me.name}</Text16Regular>
                            <Text16Regular>+{me.score}pts</Text16Regular>
                        </HorizontalLine>
                        <Divider />
                    </>
                )
            }
        </div>
    );
}

export default RankContainer;
