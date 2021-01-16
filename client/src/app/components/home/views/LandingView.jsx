import React from 'react';
import { Section } from '../../Styled';
import { Button, Typography } from '@material-ui/core';
import { ReactComponent as Graphic } from '../../../../assets/icons/collab2.svg';

const LandingView = (props) => {
  return (
    <Section>
      <Section width="50%" flexDirection="column">
        <div style={{ width: '60%' }}>
          <Typography align="left" variant="h3" color="primary" gutterBottom>
            Stop Being Lame
          </Typography>
          <Typography align="left">
            MovieMatchr offers a fresh new way of deciding what movies to watch
            with your friends. Simply create a group with your friends and swipe
            on which movies you want to watch. Quickly build a list of movies to
            watch by approving the same titles as your friends.
          </Typography>
          <div style={{ marginTop: '12px' }}>
            <Button variant="contained" color="primary">
              Get Started
            </Button>
          </div>
        </div>
      </Section>
      <Section width="50%">
        <Graphic />
      </Section>
    </Section>
  );
};

export default LandingView;
