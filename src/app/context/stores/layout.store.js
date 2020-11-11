const LayoutStore = {
  isOpenSideBar: false,
  sidemenuLink: [
    {
      text: 'Home',
      url: '/',
      label: '01.',
    },
    {
      text: 'About',
      url: '/about',
      label: '02.',
    },
    {
      text: 'Works',
      url: '/works',
      label: '03.',
    },
    {
      text: 'Contact',
      url: '/contact',
      label: '04.',
    },
  ],
  paddingMain: 'pt-16 min-lg:pt-10',
  titleOverlay: {
    isShow: false,
    title: '',
  },
};

export default LayoutStore;
