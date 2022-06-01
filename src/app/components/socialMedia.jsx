import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { SocialIcons } from '@components';
import { Github, Instagram, LinkedIn } from './icons';

const variants = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.3,
      staggerDirection: 1,
    },
  },
  closed: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.6,
      duration: 0.5,
      when: 'afterChildren',
      staggerChildren: 0.5,
    },
  },
};

const socialMedia = props => {
  const { className, inView } = props;

  return (
    <motion.div
      variants={variants}
      initial='closed'
      animate={!inView ? '' : 'show'}
      exit='exit'
      className={`flex ${className}`}
    >
      {[
        {
          id: 1,
          Icon: Github,
          url: 'https://github.com/MuhammadAkbar11',
        },
        {
          id: 2,
          Icon: LinkedIn,
          url: 'https://www.linkedin.com/in/muhammadakbarletlet/',
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
  inView: false,
};

socialMedia.propTypes = {
  className: PropTypes.string,
  inView: PropTypes.bool,
};

export default socialMedia;
