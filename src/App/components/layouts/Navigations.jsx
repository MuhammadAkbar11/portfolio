import React from 'react';
import NavigationLink from './NavigationLink';

const Navigations = () => {
  return (
    <nav className=' text-slate hidden min-md:flex flex-row flex-no-wrap  '>
      <NavigationLink url='/' label='01. ' text='Home' />
      <NavigationLink url='/about' label='02. ' text='About Me' />
      <NavigationLink url='/works' label='03. ' text='Works' />
      <NavigationLink url='/contact' label='04. ' text='Contact' />
    </nav>
  );
};

export default Navigations;
