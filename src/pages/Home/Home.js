import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Tittle, Text, TextLink } from './Home.styled';

const Home = () => {
  return (
    <Wrapper>
      <Tittle>Welcome to TWEETS</Tittle>
      <Text>
        You can find person and if you want following just press Follow{' '}
      </Text>
      <Link to="/tweets">
        <TextLink>Lets START</TextLink>
      </Link>
    </Wrapper>
  );
};

export default Home;
