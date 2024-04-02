import React from "react";
import { User } from "../types/userTypes";
import { NavLink } from "react-router-dom";

export const UserItem: React.FC<User> = ({id,name,email,address,phone}) => {
  return (
    <div>
      <NavLink to="/users/1">
        <span>{name}</span>
        <span>{email}</span>
        <span>{address.city}</span>
        <span>{phone}</span>
      </NavLink>
    </div>
  );
};

