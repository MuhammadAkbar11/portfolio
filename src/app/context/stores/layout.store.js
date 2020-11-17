const LayoutStore = {
  isOpenSideBar: false,
  navigations: [
    {
      menu: 'Home',
      url: '/',
      label: '01.',
    },
    {
      menu: 'About',
      url: '/about',
      label: '02.',
    },
    {
      menu: 'Works',
      url: '/works',
      label: '03.',
    },
  ],
  paddingMain: 'pt-16 min-lg:pt-10',
  titleOverlay: {
    isShow: false,
    title: '',
  },
};

export default LayoutStore;
