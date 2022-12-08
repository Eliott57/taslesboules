import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeComponent from "./components/HomeComponent";
import PlayersComponent from "./components/players/PlayersComponent";
import GameComponent from "./components/game/GameComponent";
import GameResultComponent from "./components/game/GameResultComponent";
import ToDoComponent from "./components/game/ToDoComponent";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeComponent} />
        <Stack.Screen name="Players" component={PlayersComponent} />
        <Stack.Screen name="Game" component={GameComponent} />
        <Stack.Screen name="GameResult" component={GameResultComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
