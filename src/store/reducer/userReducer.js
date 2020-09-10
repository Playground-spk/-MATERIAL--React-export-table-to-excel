import { actionType } from "../action";

const initialState = {
  role: "guest",
  userInfo: {},
  token: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN:
      return { ...state, role: action.value };

    default:
      return state;
  }
};

export default reducer;
