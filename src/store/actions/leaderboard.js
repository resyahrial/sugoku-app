export const addLeaderboard = (payload) => (dispatch) => {
  dispatch({ type: "leaderboard/add", payload });
};

export const clearLeaderboard = () => (dispatch) => {
  dispatch({ type: "leaderboard/clear" });
};
