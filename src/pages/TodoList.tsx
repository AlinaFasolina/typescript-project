// TodoList.tsx
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos, switchCompleted } from "../store/actions/todoActions";
import { RootState } from "../store/index";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const TodoItem = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f4f4f4;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TodoTitle = styled.span<{ completed: boolean }>`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  flex-grow: 1;
`;

function TodoList() {
  const dispatch = useDispatch();
  const { todos, loading, error } = useTypedSelector(
    (state: RootState) => state.todos
  );
  const navigate = useNavigate();

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleDoneClick = (id: number) => {
    dispatch(switchCompleted(id));
  };

  return (
    <Container>
      <button onClick={() => navigate("/")}>Back to homepage</button>
      <h1>Todo List</h1>
      {loading && <Oval />}
      {error && <p>Error: {error}</p>}
      {todos.map((todo) => (
        <TodoItem key={todo.id}>
          <TodoTitle completed={todo.completed}>{todo.title}</TodoTitle>
          <input
            checked={todo.completed}
            type="checkbox"
            onChange={() => handleDoneClick(todo.id)}
          />
        </TodoItem>
      ))}
    </Container>
  );
}

export default TodoList;
