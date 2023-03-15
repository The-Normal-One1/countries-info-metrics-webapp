import React from 'react';
import { Link } from 'react-router-dom';

const DetailPage = () => (
  <div className="detail">
    <h1>Hello This is DetailPage</h1>
    <Link to="/">Click here for the home page</Link>
  </div>
);

export default DetailPage;
