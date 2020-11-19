import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { SocialIcons } from '.';
import { Github, Instagram, LinkedIn } from './icons';

const variantSocialMedia = {
  show: {
    opacity: 1,
    transition: {
      delay: 0.9,
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.3,
      staggerDirection: 1,
    },
  },
  closed: {
    opacity: 0,
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
      transition={{}}
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
            className=''
            key={icon.id}
            url={icon.url}
            icon={
              <div className=' h-6 w-8 mr-3 hover:text-primary'>
                <Icon />
              </div>
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
