import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Hello This is HomePage. It is Awesome</h1>
    <Link to="/detailPage">Click here for the detailed page</Link>
  </div>
);

export default HomePage;
