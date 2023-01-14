import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => (
  <div>
    <Link to="/users"> users</Link>
    <button type='button' onClick={() => window.alert('sashank')}>Im app</button>
  </div>
);
export default Home;
