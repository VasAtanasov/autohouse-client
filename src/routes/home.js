import React from 'react';

const HomePage = React.lazy(() => import('../pages/home/homepage.component'));

export default {
  home: {
    path: '/home',
    component: HomePage,
    exact: true,
  },
};
