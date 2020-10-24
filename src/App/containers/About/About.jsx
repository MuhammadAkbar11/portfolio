import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import PageTitle from '../../components/layouts/PageTitle';
import AboutContent from '../../components/About/AboutContent';
import AboutInfo from '../../components/About/AboutInfo';
import AboutProfilePict from '../../components/About/AboutProfilePict';
import Footer from '../../components/layouts/Footer';

const About = props => {
  const { handleIsTextOverlay, handleTextOverlay } = props;

  useEffect(() => {
    handleIsTextOverlay(true);
    handleTextOverlay('About Me');
    document.title = 'Muhammad Akbar | About Me';
  }, []);

  return (
    <>
      {/* Title */}
      <PageTitle title='02. About Me'>
        Can I Make <span className=' text-primary'>It Better?</span>
      </PageTitle>

      {/* content */}
      <AboutContent>
        <AboutProfilePict />
        <AboutInfo />
      </AboutContent>
      <Footer />
    </>
  );
};

About.defaultProps = {
  handleIsTextOverlay: null,
  handleTextOverlay: null,
};

About.propTypes = {
  handleIsTextOverlay: PropTypes.func,
  handleTextOverlay: PropTypes.func,
};

export default About;
