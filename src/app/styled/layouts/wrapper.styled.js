import styled from 'styled-components';
import tw from 'twin.macro';

const wrapper = styled.div`
  ${tw` text-slate flex flex-col px-6 pt-1 bg-gradient-to-bl from-light-secondary via-dark-secondary to-dark-secondary  `}
  ${isHide => isHide && tw`overflow-hidden`}
  background-attachment: fixed;
  min-height: 800px;
  padding-top: 80px;

  @media (min-width: 766px) {
    & {
      padding-left: 15%;
      padding-right: 15%;
    }
  }

  @media (min-height: 810px) {
    min-height: 100vh;
  }
`;

export default wrapper;
