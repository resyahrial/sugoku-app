const initialState = {
  data: [],
  status: "unsolved",
  isLoading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "board/clear":
      return {
        ...state,
        data: [],
        status: "unsolved",
        isLoading: false,
        error: null,
      };
    case "board/fetch":
      return { ...state, data: payload };
    case "board/update":
      return {
        ...state,
        data: [
          ...state.data.slice(0, payload.index),
          payload.cell,
          ...state.data.slice(payload.index + 1),
        ],
      };
    case "board/check":
      return { ...state, status: payload };
    case "board/isLoading":
      return { ...state, isLoading: payload };
    case "board/error":
      return { ...state, error: payload };
    default:
      return state;
  }
};
