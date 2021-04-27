import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";

import boardReducer from "./boardReducer";
import leaderboardReducer from "./leaderboardReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["leaderboard"],
};

export default combineReducers({
  board: boardReducer,
  leaderboard: persistReducer(persistConfig, leaderboardReducer),
});
