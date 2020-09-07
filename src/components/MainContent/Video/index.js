import React from "react";

import VideoStyle from "./styles";
import { Text12Regular, Text12RegularInactive } from "../../Text";
import Tag, { TagInactive, TagDone } from "../../Tag";
import CheckButton from "../../CheckButton";

export default function Video({
  status,
  points,
  hours,
  backgroundImage,
  inactive = false,
  done = false,
  style,
  bgc,
}) {
  if (inactive) {
    return (
      <VideoStyle style={style} backgroundImage={backgroundImage}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            backgroundColor: "#00000090",
            borderRadius: 5,
            padding: "20px 30px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text12RegularInactive >
            <i
              class="tiny material-icons"
              style={{fontSize:32}}
            >lock_outline</i>
          </Text12RegularInactive>
          <Text12RegularInactive style={{ textAlign: "center" }}>
            Chegue no nível 4 para liberar esse curso
          </Text12RegularInactive>
        </div>
        <TagInactive style={{ position: "absolute", top: 10, right: 10 }}>
          {points}
        </TagInactive>
        <Text12RegularInactive
          style={{ position: "absolute", bottom: 10, right: 10 }}
        >
          {hours}
        </Text12RegularInactive>
      </VideoStyle>
    );
  } else if (done) {
    return (
      <VideoStyle style={style} backgroundImage={backgroundImage}>
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            display: "flex",
            alignItems: "center",
          }}
        >
          <CheckButton />
          <Text12Regular style={{ marginLeft: 8 }}>{status}</Text12Regular>
        </div>

        <TagDone style={{ position: "absolute", top: 10, right: 10 }}>
          {points}
        </TagDone>
        <Text12Regular style={{ position: "absolute", bottom: 10, right: 10 }}>
          {hours}
        </Text12Regular>
      </VideoStyle>
    );
  }
  return (
    <VideoStyle style={style} backgroundImage={backgroundImage}>
      <Text12Regular style={{ position: "absolute", top: 10, left: 10 }}>
        {status}
      </Text12Regular>

      <Tag bgc={bgc} style={{ position: "absolute", top: 10, right: 10 }}>
        {points}
      </Tag>
      <Text12Regular style={{ position: "absolute", bottom: 10, right: 10 }}>
        {hours}
      </Text12Regular>
    </VideoStyle>
  );
}
