import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import {SvgCssUri} from 'react-native-svg';
import ButtonOption from '../../assets/questions/ButtonOption.svg'
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import { GameContextType, IGame } from "../../@types/game";
import { IAnswer } from "../../@types/answer";
import moment from "moment";
import { useContext } from "react";
import { GameContext } from "../../context/gameContext";

const svg = resolveAssetSource(ButtonOption);

type Props = {
  optionNumber: number
}

function OptionButtonComponent(props: Props){
  const { game, updateGame } = useContext(GameContext) as GameContextType;

  const chooseOption = () => {
    if(game){
      let updatedGame: IGame = { ...game };

      const answer: IAnswer = {
        playerId: game.currentPlayerId,
        optionSelected: props.optionNumber,
        responseTime: moment().diff(updatedGame.currentTime)
      }

      updatedGame.currentTime = moment();
      updatedGame.turns[updatedGame.currentTurnNumber - 1].answers.push(answer);
      updatedGame.currentPlayerId += 1;

      updateGame(updatedGame);
    }
  }

  return (
    <Pressable style={styles.contain} onPress={() => chooseOption()}>
      <View style={styles.containText}>
        <Text style={styles.label}>
            {props.optionNumber === 0 ? 'A' : 'B'}
        </Text>
      </View>
      <SvgCssUri style={styles.back} uri={svg.uri} width="100%" height="90%" />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 60,
    color: 'white',
    fontWeight: '600'
  },
  contain: {
      width: 180,
      height: 180,
  },
  containText: {
    position: 'absolute',
    top: 55,
    left: 70,
    zIndex: 5
  },
  back: {
    position: 'relative',
    zIndex: 1
  }
});

export default OptionButtonComponent;
