import { Reducer } from "react";
import { AuthAction, AuthActionKind } from "../actions/authAction";
import { AuthState } from "../states/authState";

export const initialState: AuthState = {
  isLoggedIn: false
};
export const authReducer: Reducer<AuthState, AuthAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case AuthActionKind.ToggleLogin:
      return { ...state, isLoggedIn: !state.isLoggedIn };
    default:
      return state;
  }
};
