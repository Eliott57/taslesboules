import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeComponent from "./components/HomeComponent";
import PlayersComponent from "./components/players/PlayersComponent";
import GameLoaderComponent from "./components/game/GameLoaderComponent";
import GameResultComponent from "./components/game/GameResultComponent";
import PlayerProvider from "./context/playerContext";
import GameProvider from "./context/gameContext";
import StatsLoaderComponent from "./components/stats/StatsLoaderComponent";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GameProvider>
      <PlayerProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={HomeComponent} />
            <Stack.Screen name="Players" component={PlayersComponent} />
            <Stack.Screen name="GameLoader" component={GameLoaderComponent} />
            <Stack.Screen name="GameResult" component={GameResultComponent} />
            <Stack.Screen name="StatsLoader" component={StatsLoaderComponent} />
          </Stack.Navigator>
        </NavigationContainer>
      </PlayerProvider>
    </GameProvider>
  );
}

export default App;
