import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../../components/layouts/PageTitle';

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
