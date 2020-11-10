import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { SocialIcons } from '.';
import { Github, Instagram, LinkedIn } from './icons';

const variantSocialMedia = {
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.8,
      when: 'beforeChildren',
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
  closed: {
    opacity: 0,
  },
};

const variantSocialMediaIcons = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 100,
      ease: 'easeInOut',
    },
  },
  closed: {
    opacity: 0,
    y: 10,
  },
  hover: {
    scale: 1.09,
    transition: {
      yoyo: Infinity,
    },
  },
};

const socialMedia = props => {
  const { className } = props;

  return (
    <motion.div
      variants={variantSocialMedia}
      initial='closed'
      animate='show'
      className={`flex ${className}`}
    >
      {/* prettier-disable */}

      {[
        {
          id: 1,

          Icon: Github,
          url: '#/',
        },
        {
          id: 2,
          Icon: LinkedIn,
          url: '#/',
        },
        {
          id: 3,
          Icon: Instagram,
          url: '#/',
        },
      ].map(icon => {
        const { Icon } = icon;
        return (
          <SocialIcons
            className=' relative '
            key={icon.id}
            url={icon.url}
            icon={
              <motion.div
                whileHover='hover'
                variants={variantSocialMediaIcons}
                className=' h-6 w-8 mr-3 hover:text-primary'
              >
                <Icon />
              </motion.div>
            }
          />
        );
      })}
    </motion.div>
  );
};

socialMedia.defaultProps = {
  className: '',
};

socialMedia.propTypes = {
  className: PropTypes.string,
};

export default socialMedia;
