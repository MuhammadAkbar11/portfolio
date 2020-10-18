import React from 'react';

import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialNetworks() {
  return (
    <div className='w-full mt-auto flex flex-row flex-wrap justify-center  '>
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
            className=' text-xl mx-2 hover:text-primary '
            href='#/'
          >
            <FontAwesomeIcon icon={item.icon} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialNetworks;
