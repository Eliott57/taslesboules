import { View, Text, StyleSheet } from "react-native";
import TodoNextTurn from '../../assets/nextTurn/TodoNextTurn.svg';
import {SvgCssUri} from 'react-native-svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

const svgTodoNextTurn = resolveAssetSource(TodoNextTurn);

function ToDoComponent(props){
  return (
    <View style={styles.contain}>
      <View style={styles.containText}>
        <Text style={styles.txt}>{props.label}</Text>
      </View>
      <SvgCssUri style={styles.back} uri={svgTodoNextTurn.uri} width="100%" height="100%" />
    </View>
  )
}

const styles = StyleSheet.create({
  back: {
    top: 0,
    left: 5,
    zIndex: 10,
  },
  contain: {
    height: 300
  },
  containText: {
    position: 'absolute',
    top: 135,
    left: 64,
    height: 100,
    zIndex: 15,
    width: 300
  },
  txt: {
    color: "white",
    fontSize: 15,
    color: 'white',
    fontWeight: '700',
  }
});

export default ToDoComponent;
