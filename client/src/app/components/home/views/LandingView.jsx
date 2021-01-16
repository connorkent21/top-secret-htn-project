import React from 'react';
import { Section } from '../../Styled';

const LandingView = (props) => {
  return (
    <Section>
      <Section width="50%" flexDirection="column">
        <div style={{ fontSize: '2rem' }}>Stop Being Lame</div>
        <div>
          MovieMatchr offers a fresh new way of deciding what movies to watch
          with your friends
        </div>
      </Section>
      <Section width="50%">Mode</Section>
    </Section>
  );
};

export default LandingView;
