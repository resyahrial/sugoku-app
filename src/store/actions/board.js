const parseBoard = (board) => {
  return board
    .map((row, idxRow) => {
      return row.map((col, idxCol) => {
        return {
          value: col,
          initialValue: col,
          row: idxRow,
          col: idxCol,
        };
      });
    })
    .flat();
};

const boardStringify = (board) => {
  return (
    "board=[" +
    board
      .map((cell) => {
        switch (cell.col) {
          case 0:
            return `[${cell.value}`;
          case 8:
            return `${cell.value}]`;
          default:
            return `${cell.value}`;
        }
      })
      .join(",") +
    "]"
  );
};

export const clearBoard = () => (dispatch) => {
  dispatch({
    type: "board/clear",
    payload: null,
  });
};

export const fetchBoard = (difficulty = "easy") => (dispatch) => {
  dispatch({ type: "board/isLoading", payload: true });
  dispatch({ type: "board/error", payload: null });
  fetch(`https://sugoku.herokuapp.com/board?difficulty=${difficulty}`)
    .then((res) => res.json())
    .then((res) => {
      const board = parseBoard(res.board);
      dispatch({ type: "board/fetch", payload: board });
    })
    .catch((err) => dispatch({ type: "board/error", payload: err }))
    .finally(() => dispatch({ type: "board/isLoading", payload: false }));
};

export const updateBoard = (payload) => (dispatch) => {
  dispatch({
    type: "board/update",
    payload,
  });
};

export const solveBoard = (board) => (dispatch) => {
  dispatch({ type: "board/isLoading", payload: true });
  dispatch({ type: "board/error", payload: null });
  fetch(`https://sugoku.herokuapp.com/solve`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: boardStringify(board),
  })
    .then((res) => res.json())
    .then((res) => {
      res.solution.flat().forEach((value, idx) => {
        board[idx].value = value;
      });
      dispatch({ type: "board/fetch", payload: board });
    })
    .catch((err) => dispatch({ type: "board/error", payload: err }))
    .finally(() => dispatch({ type: "board/isLoading", payload: false }));
};

export const validateBoard = (board) => (dispatch) => {
  dispatch({ type: "board/isLoading", payload: true });
  dispatch({ type: "board/error", payload: null });
  fetch(`https://sugoku.herokuapp.com/validate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: boardStringify(board),
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: "board/check", payload: res.status });
    })
    .catch((err) => dispatch({ type: "board/error", payload: err }))
    .finally(() => dispatch({ type: "board/isLoading", payload: false }));
};
