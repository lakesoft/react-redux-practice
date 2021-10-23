import { authReducer, initialState } from "./authReducer";
import { toggleLogin } from "../actions/authAction";
describe("auth reducer", () => {
  it("toggle", () => {
    let state = initialState;

    state = authReducer(state, toggleLogin());
    expect(state).toMatchObject({
      isLoggedIn: true
    });

    state = authReducer(state, toggleLogin());
    expect(state).toMatchObject({
      isLoggedIn: false
    });
  });
});
