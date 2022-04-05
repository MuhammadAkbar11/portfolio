import styled from 'styled-components';
import tw from 'twin.macro';

export const ProjectSkeletonWrapper = styled.div`
  ${tw`animate-pulse mx-auto`}
  width: 100%;
  margin-bottom: 4rem;
  height: max-content;
`;

export const ProjectSkeletonCard = styled.div`
  ${tw` flex flex-col gap-5`}
  height: max-content;
  ${({ isReverse }) =>
    isReverse ? tw`min-lg:flex-row` : tw`min-lg:flex-row-reverse`}
`;

export const ProjectSkeletonCardContent = styled.div`
  ${tw`w-full min-lg:w-1/2 order-2 min-lg:order-1 flex flex-col justify-start h-auto py-6 `}

  ${({ isReverse }) => (isReverse ? tw`items-start pr-5 ` : tw`items-end pl-5`)}
`;

export const ProjectSkeletonImagePreview = styled.div`
  ${tw`w-full order-1 min-lg:order-2 min-lg:w-1/2  my-auto px-2`}
`;

export const ProjectSkeletonItem = styled.div`
  ${tw`bg-light-secondary`}
`;

export const ProjectSkeletonAction = styled.div`
  ${tw`bg-light-secondary w-6 h-6 rounded-full`}
`;

export const ProjectSkeletonImage = styled.div`
  ${tw`bg-light-secondary h-56`}
`;
