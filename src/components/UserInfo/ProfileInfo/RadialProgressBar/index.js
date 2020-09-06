import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

import { Container, ImageContainer } from './style';

function RadialProgressBar({ percentage, alt, src, style }) {
  return (
    <Container style={style}>
      <CircularProgressbarWithChildren
        value={percentage}
        styles={buildStyles({
          rotation: (1 - percentage / 100),
          strokeWidth: 10,
          strokeLinecap: 'butt',
          textSize: '16px',
          pathTransitionDuration: 0.5,
          pathColor: 'var(--yellow-color)',
          trailColor: '#F5F9FD',
        })}
      >
        <ImageContainer>
          <img
            src={src}
            alt={alt}
          />
        </ImageContainer>
      </CircularProgressbarWithChildren>
    </Container>
  );
}

export default RadialProgressBar;
