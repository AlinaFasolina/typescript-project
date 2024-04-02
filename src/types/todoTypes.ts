export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR";
export const SWITCH_COMPLETED_FIELD = "SWITCH_COMPLETED_FIELD"

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

interface FetchTodosRequestAction {
  type: typeof FETCH_TODOS_REQUEST;
}

interface FetchTodosSuccessAction {
  type: typeof FETCH_TODOS_SUCCESS;
  payload: Todo[];
}

interface FetchTodosFailureAction {
  type: typeof FETCH_TODOS_ERROR;
  payload: string;
}

interface SwithcCompletedFieldAction {
  type: typeof SWITCH_COMPLETED_FIELD;
  payload: number
}

export type TodoActionTypes =
  | FetchTodosRequestAction
  | FetchTodosSuccessAction
  | FetchTodosFailureAction
  | SwithcCompletedFieldAction