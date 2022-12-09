import { View, Text, StyleSheet } from "react-native";
import OptionComponent from '../questions/OptionComponent.tsx';
import {SvgCssUri} from 'react-native-svg';
import CardOptions from '../../assets/questions/CardOptions.svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

const svg = resolveAssetSource(CardOptions);

function OptionsComponent(){
  return (
    <View style={styles.contain}>
      <View style={styles.containOptions}>
        <OptionComponent style={styles.option} height="120" width="140" optionNumber={0} />
        <OptionComponent style={styles.option} height="120" width="140" optionNumber={1} />
      </View>
      <SvgCssUri style={styles.back} uri={svg.uri} width="100%" height="100%" />
    </View>
  )
}

const styles = StyleSheet.create({
  option: {
    position: 'relative',
    width: 60,
    height: 30
  },
  back: {
    position: 'relative',
    zIndex: 1,
    top: 0,
  },
  containOptions: {
    flex: 1,
    top: 230,
    position: 'relative',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    zIndex: 2,
  },
  contain: {
      height: 335
  }
});
export default OptionsComponent;
