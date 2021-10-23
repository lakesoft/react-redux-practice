export const AuthActionKind = {
  ToggleLogin: "TOGGLE_LOGIN"
} as const;

export type AuthAction = {
  type: typeof AuthActionKind[keyof typeof AuthActionKind];
};

export const toggleLogin = () => ({ type: AuthActionKind.ToggleLogin });
