import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { BankingReducer } from "./bankingReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  banking: BankingReducer
});
