import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const App = () => (
  <>
    <h1>available for all</h1>
    <Link to="/home"> Home</Link>
    <Link to="/users"> users</Link>
    <Outlet />
  </>
);
export default App;
