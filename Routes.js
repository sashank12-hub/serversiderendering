import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import { useRoutes } from 'react-router-dom'; //Routes is like swict in prev version
import App from './client/App';
import Home from './client/Home';
import Users from './client/Users';
import NotFound from './client/NotFound';
// export default () => (
//   <>
//     <Routes>
//       <Route exact path="/" element={<App />} />
//       <Route exact path="/hi" element={<div>hi</div>} />
//       <Route exact path="/users" element={<Users />} />
//     </Routes>
//   </>
// );
// to fetch data on server first and then to serve files we need to know what all urls need this behavior this is doneby using useRoutes
export const routesArray = [
  {
    element: <App />,
    exact: true,
    children: [
      {
        element: <Home />,
        path: 'home',
        exact: true,
      },
      {
        element: <Users />,

        path: 'users',
        exact: true,
        children: [],
        // loadData: loadData,
      },
      // {
      //     element: <AdminsList.element />,
      //     loadData: AdminsList.loadData,
      //     path: '/admins',
      // },
      { path: '*', element: <NotFound /> },
    ],
  },
];
export const route = [
  { element: <App />, path: '/', exact: true },
  {
    element: <Home />,
    path: 'home',
    exact: true,
  },
  {
    element: <Users />,
    path: 'users',
    exact: true,
    // loadData: loadData,
  },
  // { path: '*', element: <NotFound /> }
];
const Routes = () => {
  const routes = useRoutes(route);
  return routes;
};

export default Routes;
