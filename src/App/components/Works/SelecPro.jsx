import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import wallJpg from '../../assets/img/wall.jpg';

const SelecPro = props => {
  const { title, desc, position, tools } = props;

  let project = null;
  if (position === 'right') {
    project = (
      <div className='flex flex-col min-md:flex-row selecpro-row mt-8'>
        <div className='selecpro-preview w-full flex items-center min-md:w-1/2  hover:opacity-100 py-6'>
          <img
            src={wallJpg}
            className='my-auto ml-auto mr-5 min-md:mr-auto min-md:ml-5'
            alt=''
          />
        </div>
        <div className='selecpro-info w-full min-md:w-1/2 py-6 px-4'>
          <div className={`flex flex-col py-4 justify-center items-end `}>
            <h1 className='text-2xl font-montserrat font-bold text-light my-1 '>
              {' '}
              {`${title}`}
            </h1>
            <p className='text-lg text-primary font-thin font-iconsolata my-1'>
              Selected Project
            </p>
            <div className='text-base font-poppins'>
              <p className='leading-7 text-right text-light-slate'>{desc}</p>
            </div>
            <div className='my-5 w-full'>
              <ul className='flex justify-end text-sm  text-slate font-montserrat font-light'>
                {tools.map(tool => (
                  <li key={tool + 1} className='ml-2'>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex text-xl  '>
              <a href='#/' className='hover:text-primary'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href='#/' className='ml-5 hover:text-primary'>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (position === 'left') {
    project = (
      <div className='flex flex-col min-md:flex-row selecpro-row mt-8'>
        <div className='selecpro-preview w-full flex items-center min-md:w-1/2  hover:opacity-100 py-6 min-md:order-2 '>
          <img
            src={wallJpg}
            className='my-auto mr-auto ml-5 min-md:ml-auto min-md:mr-5'
            alt=''
          />
        </div>
        <div className='selecpro-info w-full min-md:w-1/2 py-6 min-md:order-1 px-4'>
          <div className={`flex flex-col py-4 justify-center items-start `}>
            <h1 className='text-2xl font-montserrat font-bold text-light my-1 '>
              {' '}
              {`${title}`}
            </h1>
            <p className='text-lg text-primary font-thin font-iconsolata my-1'>
              Selected Project
            </p>
            <div className='text-base font-poppins'>
              <p className='leading-7 text-left text-light-slate'>{desc}</p>
            </div>
            <div className='my-5 w-full'>
              <ul className='flex justify-start text-sm  text-slate font-montserrat font-light'>
                {tools.map(tool => (
                  <li key={tool + 1} className='mr-2'>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex text-xl  '>
              <a href='#/' className='hover:text-primary'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href='#/' className='ml-5 hover:text-primary'>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return project;
};

SelecPro.defaultProps = {
  title: '',
  desc: '',
  position: '',
  tools: [],
};

SelecPro.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  position: PropTypes.string,
  tools: PropTypes.arrayOf(PropTypes.string),
};

export default SelecPro;
