import React from "react";

import { Text22Bold, Text12Regular } from "../Text";

function ContentInfo({ style, title, autor }) {
  return (
    <div style={style}>
      <Text22Bold>{title}</Text22Bold>
      <Text12Regular>{autor}</Text12Regular>
    </div>
  );
}

export default ContentInfo;
