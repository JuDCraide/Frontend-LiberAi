import React from "react";

import { Text22Bold } from "../../Text";
import Video from "../Video";
import ContentInfo from "../../ContentInfo";
import Tag from "../../Tag";
import SpotlightStyle from "./styles";

function SpotlightVideo({ title, autor, hours, points, img }) {
  return (
    <SpotlightStyle>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text22Bold style={{ marginRight: 10 }}>Vídeo em destaque</Text22Bold>

        <Tag>{points}</Tag>
      </div>
      <div
        style={{
          margin: "10px 0",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Video
          style={{ flex: 1 }}
          hours={hours}
          backgroundImage={img}
          bgc="#00000000"
        />
      </div>
      <ContentInfo title={title} autor={autor} />
    </SpotlightStyle>
  );
}

export default SpotlightVideo;
