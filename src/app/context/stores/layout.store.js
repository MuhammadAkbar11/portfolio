const LayoutStore = {
  mobileMenu: false,
  navigations: [
    {
      menu: 'home',
      url: '/',
      label: '()',
    },
    {
      menu: 'about',
      url: '/about',
      label: '()',
    },
    {
      menu: 'works',
      url: '/works',
      label: '()',
    },
  ],
  paddingMain: 'pt-16 min-lg:pt-10',
  titleOverlay: {
    isShow: false,
    title: '',
  },
};

export default LayoutStore;
