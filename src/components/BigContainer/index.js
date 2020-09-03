import React from "react";

import { Text22Bold } from "../Text";
import Video from "../Video";
import ContentInfo from "../ContentInfo";

import { CoursesContainer, MainContainer } from "./style";

function BigContainer({ mainTitle }) {
  return (
    <MainContainer>
      <Text22Bold style={{ marginLeft: "22px" }}>{mainTitle}</Text22Bold>
      <CoursesContainer>
        <div style={{ marginRight: "15px" }}>
          <Video
            bgc="var(--pink-color)"
            status="Obrigatório"
            points="+534pt"
            hours="2min"
            backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
          />

          <ContentInfo
            title="Juros Compostos Sobre Dívidas"
            autor="Com Thais Andrade"
          />
        </div>
        <div>
          <Video
            done
            status="Opcional"
            points="+408pt"
            hours="5min"
            backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
          />
          <ContentInfo
            title="Nome de Um Curso Hipotetico Aqui"
            autor="Com Thais
          Andrade"
          />
        </div>
        <div>
          <Video
            inactive
            points="+234pt"
            hours="6min"
            backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
          />
          <ContentInfo
            title="Nome de Um Curso Hipotetico Aqui"
            autor="Com Thais Andrade"
          />
        </div>
      </CoursesContainer>
    </MainContainer>
  );
}

export default BigContainer;
