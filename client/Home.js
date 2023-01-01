import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => (
  <>
    <Link to="/users"> users</Link>
    <button onClick={() => window.alert('sashank')}>Im app</button>
  </>
);
export default Home;
