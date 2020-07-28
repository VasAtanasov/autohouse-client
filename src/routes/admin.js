import { Dashboard } from '../pages';

export default {
  dashboard: {
    path: '/admin',
    component: Dashboard,
    auth: true,
    role: 'ADMIN',
  },
};
