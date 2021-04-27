import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./src/store";
import { Home, Game, Finish } from "./src/screens";

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    zcool: require("./assets/font/ZCOOLKuaiLe-Regular.ttf"),
    digital: require("./assets/font/digital-7.ttf"),
    caligraph: require("./assets/font/Calligraph.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Game" component={Game} />
            <Stack.Screen name="Finish" component={Finish} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
