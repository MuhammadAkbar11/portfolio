import React from 'react';
import PropTypes from 'prop-types';

import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialNetworks(props) {
  const { className } = props;

  return (
    <div className={`social-icons-menu ${className}`}>
      {[
        {
          id: 1,
          icon: faLinkedinIn,
        },
        {
          id: 2,
          icon: faGithub,
        },
        {
          id: 3,
          icon: faTwitter,
        },
        {
          id: 4,
          icon: faInstagram,
        },
        {
          id: 5,
          icon: faTelegram,
        },
      ].map(item => {
        return (
          <a
            key={item.id}
            className='social-icon mr-2 min-md:mr-5 text-2xl '
            href='#/'
          >
            <FontAwesomeIcon icon={item.icon} />
          </a>
        );
      })}
    </div>
  );
}

SocialNetworks.defaultProps = {
  className: '',
};

SocialNetworks.propTypes = {
  className: PropTypes.string,
};

export default SocialNetworks;
