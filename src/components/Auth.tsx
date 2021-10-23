import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../actions/authAction";
import { AuthState } from "../states/authState";
import { RootState } from "../states/rootState";

export const Auth: FC = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector<RootState, AuthState>(
    (rootState) => rootState.auth
  );

  const loginHandler = () => {
    dispatch(toggleLogin());
  };

  return (
    <div>
      <button onClick={loginHandler}>{isLoggedIn ? "logout" : "login"}</button>
    </div>
  );
};
