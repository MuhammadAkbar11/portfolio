import styled from 'styled-components';
import tw from 'twin.macro';

const wrapper = styled.div`
  ${tw`bg-secondary  text-slate flex flex-col px-6 pt-1 `}
  ${isHide => isHide && tw`overflow-hidden`}
  min-height: 100vh;
  padding-top: 80px;

  @media (min-width: 766px) {
    & {
      padding-left: 10%;
      padding-right: 10%;
    }
  }
`;

export default wrapper;
