import axios from "axios";
import { Dispatch } from "redux";
import {
  TodoActionTypes,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  SWITCH_COMPLETED_FIELD,
} from "../../types/todoTypes";

export const fetchTodos = () => {
  return function(dispatch: Dispatch<TodoActionTypes>) {
    dispatch({ type: FETCH_TODOS_REQUEST });
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => {
        dispatch({ type: FETCH_TODOS_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_TODOS_ERROR, payload: error.message });
      });
  };
};

export const switchCompleted = (id: number) => {
  return { type: SWITCH_COMPLETED_FIELD, payload: id };
};
