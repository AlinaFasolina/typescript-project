import React from "react";
import { User } from "../types/userTypes";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const UserContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const UserInfo = styled(NavLink)`
  text-decoration: none;
  color: #333;
`;

const UserInfoItem = styled.p`
  margin: 5px 0;
`;

const UserInfoName = styled.p`
  margin: 5px 0;
  font-weight: 700;
`;


export const UserItem: React.FC<User> = ({name,email,phone}) => {
  return (
    <UserContainer>
    <UserInfo to="/users/1">
      <UserInfoName>{name}</UserInfoName>
      <UserInfoItem>{email}</UserInfoItem>
      <UserInfoItem>{phone}</UserInfoItem>
    </UserInfo>
  </UserContainer>
  );
};

