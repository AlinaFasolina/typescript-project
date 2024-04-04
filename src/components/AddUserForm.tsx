import React, { useRef } from "react";
import { addNewUser } from "../store/actions/userActons";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { generateIdHandler } from "../helpers/generateId";

const Form = styled.form`
  width: 100%;
  border: 1px solid #8d8d8d;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;
`;

const Title = styled.h1`
  font-size: 20px;
  padding: 0;
  margin: 20px 0 0;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 4px;
`;

const Button = styled.button`
  align-self: end;
  margin: 20px 0;
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 4px;
  background: #f58454;
  text-transform: uppercase;
  font-size: 12px;
  transition: 0.4s ease;
  &:hover {
    background: #eb5b1e;
    cursor: pointer;
  }
`;

export const AddUserForm: React.FC = () => {
  const dispatch = useDispatch();
 
  let nameRef = useRef<HTMLInputElement | null>(null);
  let emailRef = useRef<HTMLInputElement | null>(null);
  let phoneRef = useRef<HTMLInputElement | null>(null);

  const addUserHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = nameRef?.current?.value;
    const email = emailRef?.current?.value;
    const phone = phoneRef?.current?.value;
    dispatch(
      addNewUser({ id: generateIdHandler.next().value, name, email, phone })
    );
  };
  return (
    <Form action="">
      <Title>Add new user</Title>
      <div>
        <p>Name</p>
        <Input type="text" ref={nameRef} placeholder="Enter user name" />
        <p>Email</p>
        <Input type="text" ref={emailRef} placeholder="Enter user email" />
        <p>Phone</p>
        <Input type="text" ref={phoneRef} placeholder="Enter user phone" />
      </div>
      <Button type="button" onClick={addUserHandler}>
        Add user
      </Button>
    </Form>
  );
};
