import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`bg-secondary text-slate flex flex-col  px-6 pt-1 ${isHide =>
    isHide && tw`overflow-hidden`}`}
  padding-top: 80px;
`;
