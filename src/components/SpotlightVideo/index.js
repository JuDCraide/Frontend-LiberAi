import React from "react";

import { Text22Bold, Text12Bold } from "../Text";
import Video from "../Video";
import ContentInfo from "../ContentInfo";
import Button from "../Button";

function SpotlightVideo({ title, autor }) {
  return (
    <div style={{ width: "374px", height: "333px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Text22Bold>Vídeo em destaque</Text22Bold>
        <Button color="var(--pink-color)">
          <Text12Bold style={{ color: "#fff" }}>+200pt</Text12Bold>
        </Button>
      </div>
      <div style={{ margin: "30px 60px" }}>
        <Video
          hours="5min"
          backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
        />
      </div>
      <ContentInfo style={{ marginLeft: "35px" }} title={title} autor={autor} />
    </div>
  );
}

export default SpotlightVideo;
