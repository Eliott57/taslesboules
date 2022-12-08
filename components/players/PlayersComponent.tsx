import { View, Text, StyleSheet } from "react-native";
import fondExpo from "../assets/Fond-export_3.svg";
import {SvgCssUri} from 'react-native-svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';



const svg = resolveAssetSource(fondExpo);

function PlayersComponent(){
  return (
    <View>
      <Text>
        <SvgCssUri style={styles.background} uri={svg.uri} width="105%" height="105%" />
        <input type text> value="LastName-FirstName"</input>
        <input type="submit" value="+" ></input>
      </Text>
    </View>
  )
}

const styles{

.background{
    top: -30;
}
}

export default PlayersComponent;
