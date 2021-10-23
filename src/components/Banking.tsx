import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../actions/bankingAction";
import { BankingState } from "../states/bankingState";
import { RootState } from "../states/rootState";

export const Banking: FC = () => {
  const dispatch = useDispatch();
  const { balance } = useSelector<RootState, BankingState>(
    (rootState) => rootState.banking
  );

  const depositHandler = () => {
    dispatch(deposit(1));
  };
  const withdrawHandler = () => {
    dispatch(withdraw(1));
  };

  return (
    <div>
      balance: {balance}
      <div>
        <button onClick={depositHandler}>deposit</button>
        <button onClick={withdrawHandler}>withdraw</button>
      </div>
    </div>
  );
};
