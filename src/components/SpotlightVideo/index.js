import React from "react";

import { Text22Bold, Text12Bold } from "../Text";
import Video from "../Video";
import ContentInfo from "../ContentInfo";
import Tag from "../Tag";
import SpotlightStyle from './styles';

function SpotlightVideo({ title, autor, hours, points }) {
  return (
    <SpotlightStyle>
      <div
        style={{
          display: "flex",
          width:'100%',
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems:'center',
        }}
      >
        <Text22Bold style={{ marginRight: 10 }}>
          Vídeo em destaque
        </Text22Bold>

        <Tag>{points}</Tag>
      </div>
      <div style={{ margin: "10px 0", width:'100%', display:'flex', justifyContent:'center' }}>
        <Video
          style={{flex:1,}}
          hours={hours}
          backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
          bgc='#00000000'
        />
      </div>
      <ContentInfo title={title} autor={autor} />
    </SpotlightStyle>
  );
}

export default SpotlightVideo;
