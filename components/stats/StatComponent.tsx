import { View, StyleSheet } from "react-native";
import CardStat from '../../assets/stats/CardStat.svg';
import {SvgCssUri} from 'react-native-svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import OptionComponent from '../questions/OptionComponent.tsx';
import { IQuestion } from "../../@types/question";

type Props = {
  question: IQuestion,
  percentageA: number,
  percentageB: number
}

function StatComponent(props: Props){
  const svgCard= resolveAssetSource(CardStat);
  return (
    <View style={styles.contain}>
      <SvgCssUri style={styles.card} uri={svgCard.uri} width="90%" height="90%" />
      <View style={styles.containOptions}>
        <OptionComponent height="120" width="140"  title={`${props.percentageA}%`} subTitle={props.question.options[0]} />
        <OptionComponent height="120" width="140"  title={`${props.percentageA}%`} subTitle={props.question.options[1]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    top: 0,
    left: 20,
    zIndex: 100,
  },
  contain: {
    backgroundColor: '#6D81BD',
    height: 290
  },
  option: {
    position: 'relative',
    width: 60,
    height: 30
  },
  containOptions: {
    flex: 1,
    top: -105,
    position: 'relative',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    zIndex: 200,
    }
});

export default StatComponent;
