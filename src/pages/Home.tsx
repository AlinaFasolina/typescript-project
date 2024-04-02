import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

function Home() {
  return (
    <Container>
      <div>
        <h1>Welcome to My Portfolio</h1>
        <p>This is the home page of my portfolio project.</p>
        <div>
          <Link to="/todos">View Todo List</Link>
        </div>
        <div>
          <Link to="/users">View Users List</Link>
        </div>
      </div>
    </Container>
  );
}

export default Home;
