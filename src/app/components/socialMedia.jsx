import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { SocialIcons } from '.';
import { Github, Instagram, LinkedIn } from './icons';
import { useIsWindowScrolling } from '../hooks';

const defaultVariants = {
  show: {
    opacity: 0,
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
  const { className, inView } = props;

  const [variants, setVariants] = useState(defaultVariants);

  const { isWinScroll } = useIsWindowScrolling();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      setVariants(prevState => {
        return {
          ...prevState,
          show: {
            opacity: 1,
            transition: {
              delay: isWinScroll ? 0.1 : 0.9,
              duration: 0.5,
              when: 'beforeChildren',
              staggerChildren: 0.3,
              staggerDirection: 1,
            },
          },
        };
      });
    }

    return () => {
      setVariants(defaultVariants);
    };
  }, [inView, isWinScroll]);

  useEffect(() => {
    if (inView) controls.start('show');
  }, [inView, variants]);

  return (
    <motion.div
      variants={variants}
      initial='closed'
      animate={controls}
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
