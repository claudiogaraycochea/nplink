/* Pages */
//import Error404 from '../pages/error404/Error404';
import Home from '../pages/home/Home';
import WorkshopWebDeveloper from '../pages/workshop-web-developer/WorkshopWebDeveloper';
import Terms from '../pages/terms/Terms';
import Login from '../pages/login/Login';

/* Layouts */
import FullLayout from '../layouts/fullLayout/FullLayout';

export const routes = [
  {
    id: 5,
    exact: true,
    path: '/login',
    Component: Login,
    Layout: FullLayout,
    Access: 'Public',
  },
  {
    id: 4,
    exact: true,
    path: '/terms',
    Component: Terms,
    Layout: FullLayout,
    Access: 'Public',
  },
  {
    id: 3,
    exact: true,
    path: '/workshop',
    Component: WorkshopWebDeveloper,
    Layout: FullLayout,
    Access: 'Public',
  },
  {
    id: 2,
    exact: true,
    path: '/workshop-web-developer',
    Component: WorkshopWebDeveloper,
    Layout: FullLayout,
    Access: 'Public',
  },
  {
    id: 1,
    exact: true,
    path: '/',
    Component: Home,
    Layout: FullLayout,
    Access: 'Public',
  }
/* , {
    id: 0,
    exact: true,
    path: '*',
    Component: Error404,
    Layout: DashboardLayout,
    Access: 'Public',
  },*/
];