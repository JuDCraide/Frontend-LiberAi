import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

import { Container } from './style';

function RadialProgressBar({ percentage, alt, src, style }) {
  return (
    <Container style={style}>
      <CircularProgressbarWithChildren
        value={percentage}
        styles={{
          root: { height: '172px', width: '172px' },
          path: { stroke: '#FFD526' },
        }}
      >
        <img
          style={{ width: '145px', height: '145px', borderRadius: '50%' }}
          src={src}
          alt={alt}
        />
      </CircularProgressbarWithChildren>
    </Container>
  );
}

export default RadialProgressBar;
