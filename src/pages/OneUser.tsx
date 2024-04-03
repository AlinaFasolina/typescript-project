import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { User } from "../types/userTypes";
import axios from "axios";

const Container = styled.div`
import { useState } from "react-redux";
max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const OneUser: React.FC = () => {
  const params = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchOneUser();
  }, []);

  const fetchOneUser = async () => {
    try {
      let result = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      setUser(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <div>{user && <div>{user.name}</div>}</div>
    </Container>
  );
};
