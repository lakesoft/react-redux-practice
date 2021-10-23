import { deposit, withdraw } from "../actions/bankingAction";
import { BankingReducer, initialState } from "./bankingReducer";

describe("banking reducer", () => {
  it("deposit and withdraw", () => {
    let state = initialState;

    state = BankingReducer(state, deposit(10));
    expect(state).toMatchObject({
      balance: 10
    });
    state = BankingReducer(state, deposit(90));
    expect(state).toMatchObject({
      balance: 100
    });
    state = BankingReducer(state, deposit(0));
    expect(state).toMatchObject({
      balance: 100
    });
    state = BankingReducer(state, withdraw(50));
    expect(state).toMatchObject({
      balance: 50
    });
    state = BankingReducer(state, withdraw(60));
    expect(state).toMatchObject({
      balance: -10
    });
    state = BankingReducer(state, withdraw(0));
    expect(state).toMatchObject({
      balance: -10
    });
  });
});
