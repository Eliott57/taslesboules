import { View, Text, StyleSheet } from "react-native";
import {SvgCssUri} from 'react-native-svg';
import ButtonOption from '../../assets/questions/ButtonOption.svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

const svg = resolveAssetSource(ButtonOption);

function OptionButtonComponent(props){
  return (
    <View>
      <View style={styles.contain}>
        <Text style={styles.label}>
            {props.label}
        </Text>
      </View>
      <SvgCssUri style={styles.back} uri={svg.uri} width="30%" height="57%" />
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
    position: 'absolute',
    top: 40,
    left: 37,
    zIndex: 5
  },
  back: {
    position: 'relative',
    zIndex: 1
  }
});

export default OptionButtonComponent;
