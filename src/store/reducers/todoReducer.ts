import {
  TodoActionTypes,
  TodoState,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  SWITCH_COMPLETED_FIELD,
} from "../../types/todoTypes";

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

export const todoReducer = (
  state = initialState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        todos: [],
        loading: true,
        error: null,
      };
    case FETCH_TODOS_SUCCESS:
      return {
        todos: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_TODOS_ERROR:
      return {
        todos: [],
        loading: false,
        error: action.payload,
      };
    case SWITCH_COMPLETED_FIELD:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
