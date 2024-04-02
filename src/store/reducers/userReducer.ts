import {
  UserActionTypes,
  UserAction,
  UserState,
} from "../../types/userTypes";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS_REQUEST:
      return {
        users: [],
        loading: true,
        error: null,
      };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        users: action.payload,
        loading: false,
        error: null,
      };
    case UserActionTypes.FETCH_USERS_ERROR:
      return {
        users: [],
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
