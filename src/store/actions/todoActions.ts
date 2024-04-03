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
  return async function (dispatch: Dispatch<TodoActionTypes>) {
    try {
      dispatch({ type: FETCH_TODOS_REQUEST });
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTimeout(
        () => dispatch({ type: FETCH_TODOS_SUCCESS, payload: response.data }),
        300
      );
    } catch (e) {
      dispatch({ type: FETCH_TODOS_ERROR, payload: (e as Error).message });
    }
  };
};

export const switchCompleted = (id: number) => {
  return { type: SWITCH_COMPLETED_FIELD, payload: id };
};
