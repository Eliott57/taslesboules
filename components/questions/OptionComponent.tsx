import { View, Text, StyleSheet } from "react-native";
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import { useNavigation } from '@react-navigation/native';

function OptionComponent(props){
    let style = StyleSheet.create({position: 'relative', backgroundColor: '#AFB7F7', borderRadius: 20, height: 20, width: 60})
    style.height = parseInt(props.height)
    style.width = parseInt(props.width)
    return (
        <View style={style}>
            <Text style={styles.title}>
              {props.title}
            </Text>
            <Text style={styles.subTitle}>
                {props.subTitle}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  title: {
    zIndex: 10,
    position: 'relative',
    width: 30,
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