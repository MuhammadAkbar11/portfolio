import React from 'react';

const App = () => {
  return (
    <div className='px-4 h-screen w-full flex flex-col justify-center items-center bg-gray-300 '>
      <h2 className='text-center text-2xl lg:text-4xl font-bold '>
        React, Webpack and Babel Boilerplate{' '}
      </h2>
      <p className='lg:text-2xl mt-2 text-gray-600'>
        And Support <span className='text-teal-600 fons'>TailwindCss</span>
      </p>
      <p className=' mt-2 text-gray-800 text-center '>
        A Starter project using React, Webpack, babel and TailwindCss Setup
      </p>
    </div>
  );
};

export default App;
