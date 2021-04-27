import React, { useState } from "react";
import { TabView } from "react-native-tab-view";

import TabItem from "./TabItem";
import TabHeader from "./TabHeader";

export default function TabLeaderboard({ leaderboard, routes, style }) {
  const [index, setIndex] = useState(0);

  const filterPlayer = (leaderboard, difficulty) => {
    return leaderboard
      .filter((player) => player.difficulty === difficulty)
      .sort((a, b) => a.second - b.second)
      .slice(0, 5);
  };

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "easy":
        return <TabItem itemList={filterPlayer(leaderboard, route.key)} />;
      case "medium":
        return <TabItem itemList={filterPlayer(leaderboard, route.key)} />;
      case "hard":
        return <TabItem itemList={filterPlayer(leaderboard, route.key)} />;
      default:
        return null;
    }
  };
  return (
    <TabView
      renderTabBar={(props, idx) => (
        <TabHeader props={props} setIndex={setIndex} key={idx} />
      )}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      style={style}
    />
  );
}
