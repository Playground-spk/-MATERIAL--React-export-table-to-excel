import { actionType } from "../action";
import { storeRageKey } from "../service/localStoreRageItem";

const initialState = {
  role: "guest",
  userInfo: {},
  token: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN:
      return { ...state, role: action.value };

    case actionType.LOGOUT:
      localStorage.removeItem(storeRageKey);
      window.location.reload();
      return;

    default:
      return state;
  }
};

export default reducer;
