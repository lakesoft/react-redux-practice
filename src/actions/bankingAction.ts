export const BankingActionKind = {
  Deposit: "DEPOSIT",
  Withdraw: "WITHDRAW"
} as const;

export type BankingAction = {
  type: typeof BankingActionKind[keyof typeof BankingActionKind];
  ammount: number;
};

export const deposit = (ammount: number) => ({
  type: BankingActionKind.Deposit,
  ammount: ammount
});
export const withdraw = (ammount: number) => ({
  type: BankingActionKind.Withdraw,
  ammount: ammount
});
