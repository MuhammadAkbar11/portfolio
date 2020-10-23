import React from 'react';
import NavigationLink from './NavigationLink';

const Navigations = () => {
  return (
    <nav className=' text-slate hidden min-md:flex flex-row min-md:justify-end '>
      <NavigationLink url='#/' label='01. ' text='Home' />
      <NavigationLink url='/about' label='02. ' text='About Me' />
      <NavigationLink url='#/' label='03. ' text='Works' />
      <NavigationLink url='#/' label='04. ' text='Contact' />
    </nav>
  );
};

export default Navigations;
