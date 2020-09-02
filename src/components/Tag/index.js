import React from "react";

import TagStyle from "./styles";

function Tag({ children, color }) {
    return (
        <TagStyle style={{ backgroundColor: color }}>
            <p>{children}</p>
        </TagStyle>
    );
}

export default Tag;
