

import React from "react";

function Divider({ style }) {
    return (
        <div
            style={{
                ...style,
                height: 1,
                backgroundColor: '#EDF4FA',
                width: '100%'
            }}
        />
    );
}

export default Divider;
