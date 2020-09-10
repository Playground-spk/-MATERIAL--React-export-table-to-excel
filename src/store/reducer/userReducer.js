const initialState = {
  status: "guest",
  userInfo: {},
  token: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      break;

    default:
      return state;
  }
};

export default reducer;
