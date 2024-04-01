import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home page of my portfolio project.</p>
      <Link to="/todos">View Todo List</Link>
    </div>
  );
}

export default Home;