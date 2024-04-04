import { Dispatch } from "redux";
import { UserActionTypes, UserAction, User } from "../../types/userTypes";
import axios from "axios";

export function fetchUsers() {
  return async function (dispatch: Dispatch<UserAction>) {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS_REQUEST });
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: res.data,
        });
      }, 300);
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: (e as Error).message,
      });
    }
  };
}

export const addNewUser = (user: User) => {
  return {
    type: UserActionTypes.ADD_NEW_USER,
    payload: user,
  }
}

