import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import { useRoutes } from 'react-router-dom'; //Routes is like swict in prev version
import App from './client/App';
import Home from './client/Home';
import UsersList from './client/Users';
import Career from './client/career';
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

export const routes = [
  {
      element: <App/>,
      path: '/',
      // loadData: App.loadData,
      children: [
          {
              element: <Home />,
              path: 'home',
              exact:true
          },
          {
              element: <UsersList.element />,
              loadData: UsersList.loadData,
              path: 'users',
              exact:true,
          },
          {
            element: <Career/>,
            path: 'career',
            exact:true,
          }
          // {
          //     element: <AdminsList.element />,
          //     loadData: AdminsList.loadData,
          //     path: '/admins',
          // },
          // { path: '*', element: <NotFoundPage.element to="/" replace /> },
      ]
  }
]
const Routes = () => {
  const xyz = useRoutes(routes);
  return xyz;
}

export default Routes;


