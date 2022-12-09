import { View, Text, StyleSheet } from "react-native";
import {SvgCssUri} from 'react-native-svg';
import ButtonOption from '../../assets/questions/ButtonOption.svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

const svg = resolveAssetSource(ButtonOption);

function OptionButtonComponent(props){
  return (
    <View style={styles.contain}>
      <View style={styles.containText}>
        <Text style={styles.label}>
            {props.label}
        </Text>
      </View>
      <SvgCssUri style={styles.back} uri={svg.uri} width="100%" height="90%" />
    </View>
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
