import styled from 'styled-components';
import tw from 'twin.macro';

const styledTopmenu = styled.header`
  ${tw`fixed w-full left-0 px-6 flex justify-between flex-row flex-wrap items-center text-primary min-md:px-0 `}
  padding-top: 3rem;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 7000;
`;

export default styledTopmenu;
