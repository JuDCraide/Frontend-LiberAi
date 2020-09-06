import React from "react";

import HomeStyle, { ImageContainer, MidColumn } from "./styles";
import HorizontalContainer from "../../components/HorizontalContainer";
import Course from "../../components/Course";
import Quizz from "../../components/Quizz";
import SpotlightVideo from "../../components/SpotlightVideo";
//import BattleContainer from "../../components/BattleContainer";
import { Text18Regular } from "../../components/Text";
import Container from "../../components/Container";
import RadialProgressBar from "../../components/UserInfo/RadialProgressBar"
import ProfileMenu from "../../components/UserInfo/ProfileMenu";
import ProfileInfo from "../../components/UserInfo/ProfileInfo";
import NextLevelInfo from "../../components/UserInfo/NextLevelInfo";

import logoImg from "../../assets/logo.png";
import profileImg from "../../assets/AndressaProfile.jpg";

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
                    <div style={{overflowX:'auto'}}>
                    <NextLevelInfo
                        nextLevel={3}
                        prize='R$100 em empréstimo pessoal do seu banco'
                    />
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

            </div>
        </HomeStyle>
    );
}

export default Home;
