import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Github, IconExternalLinkAlt } from '@components/icons';

/* eslint-disable */
const StyledProjectInfo = motion.custom(styled.div`
  ${tw` w-full flex-1 min-lg:w-1/2 py-6 px-4 `}
  ${props => {
    const { position } = props;
    if (position === 'right') {
      return css`
        ${tw`min-lg:order-2`}
        & .project-row {
          ${tw`items-end `}
        }

        & .description {
          ${tw`text-right min-lg:pl-4 `}
        }

        & .tools {
          ${tw`justify-end `}
        }
        & .tool {
          ${tw`mx-1 my-auto`}
        }
      `;
    }
    return css`
      ${tw`min-lg:order-1`}
      & .project-row {
        ${tw` items-start `}
      }

      & .tools {
        ${tw` justify-start `}
      }

      & .tool {
        ${tw` mx-1 my-auto`}
      }
    `;
  }}
`);

const StyledProjectInfoRow = styled.div`
  ${tw`flex flex-col py-4 justify-center items-end `}
`;

const Title = styled.h1`
  ${tw`text-2xl font-montserrat font-bold text-light my-1 `}
`;

const Label = styled.p`
  ${tw`text-lg text-primary font-thin font-inconsolata mb-2 italic`}
`;
const Description = styled.div`
  ${tw`text-sm font-poppins`}
`;

const defaultProps = {
  title: '',
  description: '',
  tools: [],
  position: '',
  variants: {},
  github: '',
  demo: '',
  actionVariants: {},
};

const proptypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tools: PropTypes.arrayOf(PropTypes.string),
  github: PropTypes.string,
  demo: PropTypes.string,
  position: PropTypes.string,
  variants: PropTypes.objectOf(PropTypes.object),

  actionVariants: PropTypes.objectOf(PropTypes.object),
};

// const variants = {
//   init: {
//     opacity: 0,
//     y: 15,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: 'spring',
//       duration: 0.6,
//     },
//   },
// };

// const actionVariants = {
//   hover: {
//     scale: 1.09,
//     y: -3,
//   },
//   transition: {
//     type: 'spring',
//   },
// };

const projectInfo = props => {
  const {
    title,
    description,
    tools,
    position,
    variants,
    github,
    demo,
    actionVariants,
  } = props;
  let demoUrl = demo;
  const toolsLength = tools.length;

  if (github === 'https://github.com/MuhammadAkbar11/portfolio') {
    demoUrl = '';
  }

  return (
    <StyledProjectInfo variants={variants} position={position}>
      <StyledProjectInfoRow className='project-row'>
        <Title>{title}</Title>
        <Label>{' // Selected Project'}</Label>
        <Description>
          <p className={`leading-7  text-lightness-slate description`}>
            {description}
          </p>
        </Description>
        <div className='my-3 w-full'>
          <ul className='flex flex-wrap text-base  text-slate font-inconsolata  tools'>
            <span className='font-semibold text-primary text-lg'>{'['}</span>
            {tools.map((tool, i) => (
              <li key={tool + 1} className=' capitalize tool '>
                {`"${tool}"`}
                {toolsLength === i + 1 ? (
                  ''
                ) : (
                  <span className='text-lg font-semibold '>,</span>
                )}
              </li>
            ))}
            <span className='font-semibold text-primary text-lg'>{']'}</span>
          </ul>
        </div>
        <div className='flex relative mt-3'>
          {((github !== '') & (github !== null)) == 1 && (
            <motion.a
              className='hover:text-primary  h-6 '
              variants={actionVariants}
              whileHover='hover'
              target='_blank'
              href={github}
            >
              <Github />
            </motion.a>
          )}
          {((demoUrl !== '') & (demoUrl !== null)) == 1 && (
            <motion.a
              className='hover:text-primary  h-6 ml-5 '
              variants={actionVariants}
              whileHover='hover'
              target='_blank'
              href={demoUrl}
            >
              <IconExternalLinkAlt />
            </motion.a>
          )}
        </div>
      </StyledProjectInfoRow>
    </StyledProjectInfo>
  );
};

projectInfo.defaultProps = defaultProps;

projectInfo.propTypes = proptypes;

export default projectInfo;
