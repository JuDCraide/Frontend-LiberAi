import React from "react";

import TagStyle from "./styles";

export default function Tag({ children, style, bgc }) {
  return (
    <TagStyle style={{ ...style, ...{ backgroundColor: bgc } }}>
      <p>{children}</p>
    </TagStyle>
  );
}

export function TagDone({ children, style }) {
  return (
    <TagStyle
      style={{ ...style, ...{ backgroundColor: "var(--green-color)" } }}
    >
      <p>{children}</p>
    </TagStyle>
  );
}
export function TagInactive({ children, style }) {
  return (
    <TagStyle
      style={{ ...style, ...{ backgroundColor: "var(--inactive-color)" } }}
    >
      <p>{children}</p>
    </TagStyle>
  );
}

export function TagLevel({ children, style }) {
  return (
    <TagStyle
      style={{ ...style, ...{ backgroundColor: "var(--background-color)" } }}
    >
      <p style={{
        color: '#032C55',
        fontSize: 14,
        lineHeigth: 22,
        fontWeight: 'bold'
      }} > {children}</p>
    </TagStyle>
  );
}