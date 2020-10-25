import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../../components/layouts/PageTitle';
import SocialNetworks from '../../components/Home/SocialNetworks';
import Footer from '../../components/layouts/Footer';

const Contacts = props => {
  const { handleIsTextOverlay, handleTextOverlay } = props;

  useEffect(() => {
    handleIsTextOverlay(true);
    handleTextOverlay('Contact Me');
    document.title = 'Muhammad Akbar | Contact ';
  }, []);

  return (
    <>
      {/* Title */}
      <PageTitle title='02. Contact Me'>
        <span className=' text-primary'>Wanna</span> Know More?
      </PageTitle>
      <div className='flex flex-1 h-full flex-col '>
        <div className='mt-12 w-full flex flex-col min-md:flex-row  '>
          <div className='flex-1  px-2 min-md:px-5 '>
            <p className='min-md:text-lg text-light-slate '>
              {/* eslint-disable */}
              Kontak saya selalu aktif jika anda mempunyai pertanyaan atau hanya
              mengucapkan {`"Hai Akbar"`}
            </p>
          </div>
          <div className='flex-1  px-2   '>
            <h3 className='mb-3'>Sosial Media : </h3>
            <SocialNetworks className='mt-auto' />
          </div>
        </div>
        <Footer className='flex mt-auto' />
      </div>
    </>
  );
};

Contacts.defaultProps = {
  handleIsTextOverlay: null,
  handleTextOverlay: null,
};

Contacts.propTypes = {
  handleIsTextOverlay: PropTypes.func,
  handleTextOverlay: PropTypes.func,
};

export default Contacts;
