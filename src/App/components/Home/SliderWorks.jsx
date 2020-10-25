import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../assets/scss/vendors/swipper.scss';

const SliderWorks = () => {
  const projectItems = [
    {
      id: 1,
      title: 'Rental Mobil',
      url: 'Tes',
    },
    {
      id: 2,
      title: 'Burger Builder',
      url: 'Yess',
    },
    {
      id: 3,
      title: 'Burger Builder',
      url: 'Yess',
    },
    /* eslint-disable */
  ].map((item, i) => {
    return (
      <SwiperSlide className='' key={item.id}>
        <img
          className=' absolute z-0 w-full object-cover h-full rounded-md bg-secondary '
          src={`https://picsum.photos/id/${item.id * 5}/500/500`}
          alt=''
        />
        <p className='z-10'>{item.title}</p>
      </SwiperSlide>
    );
  });

  return (
    <div className=' flex-1 w-full  my-16 min-lg:hidden '>
      <p className='text-sm'>My selected works</p>
      <>
        <Swiper
          slidesOffsetAfter={0}
          id='main'
          grabCursor
          className=' relative h-48 w-full my-3 p-2'
          slidesPerView={2}
          spaceBetween={20}
        >
          {projectItems}
        </Swiper>
      </>
    </div>
  );
};

export default SliderWorks;
