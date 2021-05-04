// This is Action of the Reducer
export const SignUp = (UserName, UserMailId, UserPassword) => {
  return {
    type: "SIGN_UP",
    payload: {
      name: UserName,
      mailid: UserMailId,
      password: UserPassword,
      LoggedIn: true,
    },
  };
};
export const SignOut = () => {
  return {
    type: "SIGN_OUT",
    payload: {
      LoggedIn: false,
    },
  };
};
