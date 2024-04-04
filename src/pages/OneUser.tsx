import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { User } from "../types/userTypes";
import axios from "axios";
import { Breadcrumbs, Container, Crumb } from "../styles/main";

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
      <Breadcrumbs>
        <Crumb>
          <NavLink to="/">Home</NavLink>
        </Crumb>
        <Crumb>
          <NavLink to="/users">Users List</NavLink>
        </Crumb>
        <Crumb>User</Crumb>
      </Breadcrumbs>

      <div>
        {user && (
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.address?.city}</p>
            <p>{user.address?.street}</p>
            <p>{user.address?.zipcode}</p>
          </div>
        )}
      </div>
    </Container>
  );
};
