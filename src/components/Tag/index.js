import React from "react";

import TagStyle from "./styles";

export default function Tag({ children }) {
    return (
        <TagStyle>
            <p>{children}</p>
        </TagStyle>
    );
}

export function TagDone({ children }) {
    return (
        <TagStyle style={{ backgroundColor: 'var(--green-color)' }}>
            <p>{children}</p>
        </TagStyle>
    );
}
export function TagInactive({ children }) {
    return (
        <TagStyle style={{ backgroundColor: 'var(--inactive-color)' }}>
            <p>{children}</p>
        </TagStyle>
    );
}
