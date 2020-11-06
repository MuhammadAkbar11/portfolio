import styled from 'styled-components';
import tw from 'twin.macro';

const styledTopmenu = styled.header`
  ${tw`fixed w-full left-0 px-6 flex justify-between flex-row flex-wrap pt-3 items-center text-primary min-md:pt-8 min-md:pl-0 min-md:pr-8`}
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 7000;
`;

export default styledTopmenu;
