import React from "react";

import HomeStyle, { ImageContainer, MidColumn } from "./styles";
import HorizontalContainer from "../../components/MainContent/HorizontalContainer";
import Course from "../../components/MainContent/Course";
import Quizz from "../../components/MainContent/Quizz";
import SpotlightVideo from "../../components/MainContent/SpotlightVideo";
//import BattleContainer from "../../components/BattleContainer";
import { Text18Regular } from "../../components/Text";
import Container from "../../components/Container";
import RadialProgressBar from "../../components/UserInfo/RadialProgressBar"
import ProfileMenu from "../../components/UserInfo/ProfileMenu";
import ProfileInfo from "../../components/UserInfo/ProfileInfo";
import NextLevelInfo from "../../components/UserInfo/NextLevelInfo";
import Lesson from '../../components/UserInfo/Lesson';
import LessonsContainer from '../../components/UserInfo/LessonsContainer';
import Divider from '../../components/Divider';

import logoImg from "../../assets/logo.png";
import profileImg from "../../assets/AndressaProfile.jpg";
import RankContainer from "../../components/SecondaryContent/RankContainer";

function Home() {
    return (
        <HomeStyle>
            <div>
                <Container style={{ position: "sticky", top: 0, height: 'calc(100vh - 60px)' }}>
                    <div style={{ display: "flex" }}>
                        <RadialProgressBar
                            percentage={32}
                            src={profileImg}
                            alt="Andressa Schinoff profile"
                        />
                        <ProfileMenu />
                    </div>
                    <ProfileInfo
                        name="Andressa Schinoff"
                        level={2}
                        levelName="Novata das Dívidas"
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflowX: 'auto'}}>
                        <NextLevelInfo
                            nextLevel={3}
                            prize='R$100 em empréstimo pessoal do seu banco'
                        />
                        <LessonsContainer title=''>
                            <Lesson
                                done
                                tag='curso'
                                time='5 horas'
                                points='+651pt'
                                title='Nome de Um Curso Hipotetico Aqui'
                                subtitle='Com Thais Andrade'
                            />
                            <Divider />
                            <Lesson
                                tag='vídeo'
                                time='15 min'
                                points='+161pt'
                                title='Nome de Um Vídeo Hipotetico Aqui'
                                subtitle='Com Thais Andrade'
                            />
                            <Divider />
                            <Lesson
                                tag='quizz relâmpago'
                                points='+100pt'
                                title='Nome de Um Quiz Hipotetico Aqui'
                            />
                        </LessonsContainer>
                    </div>
                </Container>
            </div>
            
            <div>
                <ImageContainer>
                    <div>
                        <img src={logoImg} alt="LiberAí" />
                    </div>
                    <Text18Regular style={{ textTransform: "capitalize" }}>
                        A liberdade financeira na sua mão
                    </Text18Regular>
                </ImageContainer>

                <HorizontalContainer mainTitle="Nossos Cursos">
                    <Course
                        status="Obrigatório"
                        points="+340"
                        hours="6min"
                        backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                        title="Nome de Um Curso Hipotetico Aqui"
                        autor="Com Thais Andrade"
                    />
                    <Course
                        done
                        status="Opcional"
                        points="+340"
                        hours="6min"
                        backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                        title="Nome de Um Curso Hipotetico Aqui"
                        autor="Com Thais Andrade"
                    />
                    <Course
                        done
                        status="Obrigatório"
                        points="+340"
                        hours="6min"
                        backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                        title="Nome de Um Curso Hipotetico Aqui"
                        autor="Com Thais Andrade"
                    />
                    <Course
                        inactive
                        status="Opcional"
                        points="+340"
                        hours="6min"
                        backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                        title="Nome de Um Curso Hipotetico Aqui"
                        autor="Com Thais Andrade"
                    />
                </HorizontalContainer>

                <MidColumn>
                    <Quizz title="Você sabe tudo  sobre Juros?!" points="+553" />
                    <SpotlightVideo
                        title="Como economizar em momentos de crise"
                        autor="Com Thais Andrade"
                        points="+553"
                        hours="26min"
                    />
                </MidColumn>

                <HorizontalContainer mainTitle="Nossos Vídeos">
                    <Course
                        status="Opcional"
                        points="+340"
                        hours="6min"
                        backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                        title="Nome de Um Vídeo Hipotetico Aqui"
                        autor="Com Thais Andrade"
                    />
                    <Course
                        done
                        status="Obrigatório"
                        points="+340"
                        hours="6min"
                        backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                        title="Nome de Um Vídeo Hipotetico Aqui"
                        autor="Com Thais Andrade"
                    />
                    <Course
                        done
                        status="Opcional"
                        points="+340"
                        hours="6min"
                        backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                        title="Nome de Um Vídeo Hipotetico Aqui"
                        autor="Com Thais Andrade"
                    />
                    <Course
                        inactive
                        status="Obrigatório"
                        points="+340"
                        hours="6min"
                        backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                        title="Nome de Um Vídeo Hipotetico Aqui"
                        autor="Com Thais Andrade"
                    />
                </HorizontalContainer>
            </div>
            
            <div>
                <RankContainer>

                </RankContainer>
            </div>
        </HomeStyle>
    );
}

export default Home;
