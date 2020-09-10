import { store } from "../..";

const { storeRageKey } = require("./localStoreRageItem");

const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem(storeRageKey, serializedState);
};

const loadState = () => {
  const serializedState = localStorage.getItem(storeRageKey);
  if (serializedState) {
    return JSON.parse(serializedState);
  } else {
    return undefined;
  }
};

const getRoleUser = () => {
  return store.getState().user.role;
};

export { saveState, loadState, getRoleUser };
