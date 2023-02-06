const reducer = (state, action) => {
  if (action.type === "TOKEN") {
    return { ...state, token: action.payload };
  }
  return state;
};

const defaultState = {
  token: "",
};

export { reducer, defaultState };
