import { View, Text, StyleSheet } from "react-native";
import OptionComponent from '../questions/OptionComponent.tsx';
import {SvgCssUri} from 'react-native-svg';
import CardOptions from '../../assets/questions/CardOptions.svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

const svg = resolveAssetSource(CardOptions);

function OptionsComponent(){
  return (
    <View>
      <View style={styles.contain}>
        <OptionComponent style={styles.option} height="120" width="140" title="A." subTitle="la question est une question test a répondre par la joueur" />
        <OptionComponent style={styles.option} height="120" width="140" title="B." subTitle="la question est une question test a répondre par la joueur" />
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
    top: -220,
    backgroundColor: 'red'
  },
  contain: {
    flex: 1,
    top: 210,
    position: 'relative',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    zIndex: 2,
  }
});
export default OptionsComponent;