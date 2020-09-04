import React from "react";

import HomeStyle, { ImageContainer, MidColumn } from './styles';
import HorizontalContainer from '../../components/HorizontalContainer';
import Course from '../../components/Course';
import Quizz from '../../components/Quizz';
import SpotlightVideo from '../../components/SpotlightVideo';
import { Text18Regular } from "../../components/Text";

import logoImg from '../../assets/logo.png'


function Home() {
    return (
        <HomeStyle>
            <div >

            </div>
            <div>
                <ImageContainer>
                    <div>
                        <img src={logoImg} alt="LiberAí" />
                    </div>
                    <Text18Regular style={{ textTransform: 'capitalize' }}>A liberdade financeira na sua mão</Text18Regular>
                </ImageContainer>
                <HorizontalContainer mainTitle='Nossos Cursos'>
                    <Course
                        status='Obrigatório'
                        points='+340'
                        hours="6min"
                        backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                        title="Nome de Um Curso Hipotetico Aqui"
                        autor="Com Thais Andrade"
                    />
                    <Course
                        done
                        status='Opcional'
                        points='+340'
                        hours="6min"
                        backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                        title="Nome de Um Curso Hipotetico Aqui"
                        autor="Com Thais Andrade"
                    />
                    <Course
                        done
                        status='Obrigatório'
                        points='+340'
                        hours="6min"
                        backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                        title="Nome de Um Curso Hipotetico Aqui"
                        autor="Com Thais Andrade"
                    />
                    <Course
                        inactive
                        status='Opcional'
                        points='+340'
                        hours="6min"
                        backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                        title="Nome de Um Curso Hipotetico Aqui"
                        autor="Com Thais Andrade"
                    />
                </HorizontalContainer>

                <MidColumn>
                    <Quizz title='Você sabe tudo  sobre Juros?!' points='+553' />
                    <SpotlightVideo
                        title="Como economizar em momentos de crise"
                        autor="Com Thais Andrade"
                        points='+553'
                        hours='26min'
                    />
                </MidColumn>
                <HorizontalContainer mainTitle='Nossos Vídeos'>
                    <Course
                        status='Opcional'
                        points='+340'
                        hours="6min"
                        backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                        title="Nome de Um Vídeo Hipotetico Aqui"
                        autor="Com Thais Andrade"
                    />
                    <Course
                        done
                        status='Obrigatório'
                        points='+340'
                        hours="6min"
                        backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                        title="Nome de Um Vídeo Hipotetico Aqui"
                        autor="Com Thais Andrade"
                    />
                    <Course
                        done
                        status='Opcional'
                        points='+340'
                        hours="6min"
                        backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                        title="Nome de Um Vídeo Hipotetico Aqui"
                        autor="Com Thais Andrade"
                    />
                    <Course
                        inactive
                        status='Obrigatório'
                        points='+340'
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
