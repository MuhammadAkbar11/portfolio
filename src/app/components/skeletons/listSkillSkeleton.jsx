import React from 'react';

const listSkillSkeleton = () => {
  return (
    <div className=' animate-pulse w-full '>
      <ul className=' text-sm leading-8 xs:flex xs:flex-col md:block'>
        {[...Array(12).keys()].map((x, idx) => {
          let widthClass = 'w-3/4';
          let widthClassMobile = 'w-11/12';
          const key = idx;

          if (idx >= 3 && idx <= 5) widthClass = 'w-11/12';
          if (idx >= 6 && idx <= 8) widthClass = 'w-1/2';

          if (idx % 1 === 0) widthClassMobile = 'w-1/2';
          if (idx % 2 === 0) widthClassMobile = 'w-3/4';
          if (idx % 3 === 0) widthClassMobile = 'w-11/12';
          return (
            <li
              key={key}
              className='pr-2 mb-2 h-auto w-4/12 block float-left   '
            >
              <div
                className={`h-5 flex min-sm:hidden items-center text-base italic bg-light-secondary ${widthClassMobile} `}
              />
              <div
                className={`h-5 hidden min-sm:flex items-center text-base italic bg-light-secondary ${widthClass} `}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default listSkillSkeleton;
