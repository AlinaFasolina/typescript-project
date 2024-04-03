import React, { useEffect } from "react";
import { fetchUsers } from "../store/actions/userActons";
import { useDispatch } from "react-redux";
import { RootState } from "../store/index";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { UserItem } from "../components/UserItem";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const Users: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading, error } = useTypedSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchUsers());
  }, []);

  const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  `;

  return (
    <Container>
      <button onClick={() => navigate("/")}>Back to homepage</button>
      <h1>Users List</h1>
      {loading && <Oval />}
      {error && <h1>...error</h1>}
      {users &&
        users.map((user) => (
          <UserItem
            id={user.id}
            key={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
          />
        ))}
    </Container>
  );
};
