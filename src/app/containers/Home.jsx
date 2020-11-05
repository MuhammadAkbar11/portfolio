import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Title from '@components/Title';
import SubTitle from '@components/SubTitle';

const App = styled.div`
  ${tw` h-screen flex flex-col justify-center items-center border  `};
  line-height: 3rem;
`;

const Home = () => {
  return (
    <>
      <App>
        <Title>Webpack, React and Babel Boilerplate</Title>
        <SubTitle tag='h5'>
          Support {/* eslint-disable */}
          <a
            href='https://tailwindcss.com/'
            target='_blank'
            tw='text-teal-600 font-inconsolata  '
          >
            TailwindCss{' '}
          </a>{' '}
          and
          <a
            target='_blank'
            href='https://styled-components.com/'
            tw='text-yellow-600  font-inconsolata'
          >
            {' '}
            Styled-Component
          </a>
        </SubTitle>
      </App>
    </>
  );
};

export default Home;
