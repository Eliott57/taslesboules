import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { GameContext } from "../../context/gameContext";
import { GameContextType } from "../../@types/game";

type Props = {
  optionNumber: number | null,
  title: string | null,
  subTitle: string | null
}

function OptionComponent(props: Props){
  const { game } = useContext(GameContext) as GameContextType;

  let style: StyleSheet.NamedStyles<any> = StyleSheet.create({position: 'relative', backgroundColor: '#AFB7F7', borderRadius: 20, height: 20, width: 60})

  style.height = parseInt(props.height);
  style.width = parseInt(props.width);

  return (
      <View style={style}>
          <Text style={styles.title}>
            {props.title ? props.title : props.optionNumber === 0 ? 'A.' : 'B.'}
          </Text>
          <Text style={styles.subTitle}>
            {props.subTitle ? props.subTitle : game?.turns[game.currentTurnNumber - 1].question.options[props.optionNumber]}
          </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  title: {
    zIndex: 10,
    position: 'relative',
    width: 100,
    top: 10,
    left: 25,
    fontSize: 16,
    color: 'white',
    fontWeight: '800'
  },
  subTitle: {
      zIndex: 11,
      position: 'relative',
      width: '80%',
      height: 160,
      top: 20,
      left: 21,
      fontSize: 13,
      color: 'white',
      fontWeight: '400',
    },
});

export default OptionComponent;
