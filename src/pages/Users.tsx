import React, { useEffect } from "react";
import { fetchUsers } from "../store/actions/userActons";
import { useDispatch } from "react-redux";
import { RootState } from "../store/index";
import { NavLink, useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { UserItem } from "../components/UserItem";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Breadcrumbs, Container, Crumb } from "../styles/main";
import { AddUserForm } from "../components/AddUserForm";
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

  return (
    <Container>
      <Breadcrumbs>
        <Crumb>
          <NavLink to="/">Home</NavLink>
        </Crumb>
        <Crumb>Users List</Crumb>
      </Breadcrumbs>

      <h1>Users List</h1>
      <AddUserForm />
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
