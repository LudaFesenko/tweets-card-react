import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from './Home.styled';

const Home = () => {
  return (
    <Wrapper>
      <p>Welcome to TWEETS</p>
      <p>You can see person and see how is popular</p>
      <p>If you want following just press Follow </p>
      <Link to="/tweets">Lets START</Link>
    </Wrapper>
  );
};

export default Home;
