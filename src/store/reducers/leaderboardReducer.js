const initialState = {
  leaderboard: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "leaderboard/add":
      return { ...state, leaderboard: [...state.leaderboard, payload] };
    case "leaderboard/clear":
      return { ...state, leaderboard: [] };
    default:
      return state;
  }
};
