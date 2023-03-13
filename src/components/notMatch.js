import React from 'react';
import { Link } from 'react-router-dom';

const NotMatch = () => (
  <div>
    <h1>No URL with this Address</h1>
    <Link to="/">You can go back to the HomePage</Link>
  </div>
);

export default NotMatch;
