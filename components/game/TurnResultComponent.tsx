import { View, Text, StyleSheet } from "react-native";
import ResultNextTurnSVG from '../../assets/nextTurn/ResultNextTurn.svg';
import {SvgCssUri} from 'react-native-svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import OptionComponent from '../questions/OptionComponent.tsx';
import { useContext } from "react";
import { GameContext } from "../../context/gameContext";
import { GameContextType } from "../../@types/game";
import { IPlayer, PlayerContextType } from "../../@types/player";
import { PlayerContext } from "../../context/playerContext";

function TurnResultComponent(){
  const { game } = useContext(GameContext) as GameContextType;
  const { players } = useContext(PlayerContext) as PlayerContextType;
  const svgResultNextTurn = resolveAssetSource(ResultNextTurnSVG);

  if(!game)
    return null;

  const getPlayersIds = (optionNumber: number) : number[] => {
    return game.turns[game.currentTurnNumber - 1].answers.filter(answer => answer.optionSelected === optionNumber).map(answer => answer.playerId);
  }

  const playersA = () : IPlayer[] => {
    const playersIds = getPlayersIds(0);
    return players.filter(player => playersIds.includes(player.id));
  }
  const playersB = () : IPlayer[] => {
    const playersIds = getPlayersIds(1);
    return players.filter(player => playersIds.includes(player.id));
  }


  return (
    <View style={styles.contain}>
      <View style={styles.containOptions}>
        <View style={styles.option}>
            <OptionComponent height="115" width="140" optionNumber={0} />
        </View>
        <View style={styles.option}>
            <OptionComponent height="115" width="140" optionNumber={1} />
        </View>
      </View>
      <View style={styles.containTextLeft}>
        {playersA().map((player, index) =>  <Text key={index} style={styles.txt}>{player.name}</Text>)}
      </View>
      <View style={styles.containTextRight}>
        {playersB().map((player, index) =>  <Text key={index} style={styles.txt}>{player.name}</Text>)}
      </View>
      <SvgCssUri style={styles.back} uri={svgResultNextTurn.uri} width="90%" height="130%"/>
    </View>
  )
}

const styles = StyleSheet.create({
  back: {
    top: -15,
    left: 29,
    zIndex: 10,
  },
  contain: {
    height: 300,
    top: 12
  },
  containTextLeft: {
    position: 'absolute',
    top: 210,
    left: 75,
    height: 150,
    zIndex: 15,
    width: 120
  },
  containTextRight: {
    position: 'absolute',
    top: 210,
    left: 215,
    height: 150,
    zIndex: 15,
    width: 120
  },
  txt: {
    color: "white",
    fontSize: 15,
    color: 'white',
    fontWeight: '700',
  },
  option: {
    position: 'relative',
    width: 160,
    height: 30,
  },
  containOptions: {
      flex: 1,
      top: 95,
      left: 15,
      position: 'relative',
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 20,
    }
});

export default TurnResultComponent;
