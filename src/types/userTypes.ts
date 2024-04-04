export enum UserActionTypes {
  FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
  ADD_NEW_USER = "ADD_NEW_USER",
}

interface Address {
  street: string;
  city: string;
  zipcode: string;
}

export interface User {
  id: number;
  name?: string;
  email?: string;
  address?: Address;
  phone?: string;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: null | string;
}

interface AddNewUserAction {
  type: UserActionTypes.ADD_NEW_USER;
  payload: User;
}

interface FetchUsersRequestAction {
  type: UserActionTypes.FETCH_USERS_REQUEST;
}

interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUsersRequestAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction
  | AddNewUserAction;
