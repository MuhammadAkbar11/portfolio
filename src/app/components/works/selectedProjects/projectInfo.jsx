import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Github, IconExternalLinkAlt } from '@components/icons';

/* eslint-disable */
const StyledProjectInfo = motion.custom(styled.div`
  ${tw` w-full min-lg:w-1/2 py-6 px-4 `}
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
          ${tw`ml-3`}
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
        ${tw` mr-3`}
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
  ${tw`text-lg text-primary font-thin font-inconsolata my-1`}
`;
const Description = styled.div`
  ${tw`text-sm font-poppins`}
`;

const defaultProps = {
  title: '',
  description: '',
  tools: [],
  position: '',
};

const proptypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tools: PropTypes.arrayOf(PropTypes.string),
  position: PropTypes.string,
};

const variants = {
  init: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.6,
    },
  },
};

const actionVariants = {
  hover: {
    scale: 1.09,
    y: -3,
  },
  transition: {
    type: 'spring',
  },
};

const projectInfo = props => {
  const { title, description, tools, position } = props;

  return (
    <StyledProjectInfo variants={variants} position={position}>
      <StyledProjectInfoRow className='project-row'>
        <Title>{title}</Title>
        <Label>Selected Project</Label>
        <Description>
          {' '}
          <p className={`leading-7  text-light-slate description`}>
            {description}
          </p>
        </Description>
        <div className='my-5 w-full'>
          <ul className='flex text-base  text-slate font-montserrat font-light tools'>
            {tools.map(tool => (
              <li key={tool + 1} className=' capitalize tool '>
                {tool}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex relative'>
          <motion.a
            className='hover:text-primary  h-6 '
            variants={actionVariants}
            whileHover='hover'
            href='#/'
          >
            <Github />
          </motion.a>
          <motion.a
            className='hover:text-primary  h-6 ml-5 '
            variants={actionVariants}
            whileHover='hover'
            href='#/'
          >
            <IconExternalLinkAlt />
          </motion.a>
        </div>
      </StyledProjectInfoRow>
    </StyledProjectInfo>
  );
};

projectInfo.defaultProps = defaultProps;

projectInfo.propTypes = proptypes;

export default projectInfo;
