import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const App = () => (
  <div>
    <h1>available for all</h1>
    <Link to="/home"> Home</Link>

    <Outlet />
  </div>
);
export default App;
