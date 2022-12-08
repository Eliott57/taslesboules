import {View, Text, StyleSheet} from "react-native";
import {SvgCssUri} from 'react-native-svg';


const FondExport = require('../../assetss/FondExport.svg');
const resolveAssetSource = require("react-native/Libraries/Image/resolveAssetSource");

const svg = resolveAssetSource(FondExport);

function PlayersComponent(){
  return (
    <View>
        <SvgCssUri style={styles.background} uri={svg.uri} width="105%" height="105%" />
        <input type= "text"> value="LastName-FirstName"</input>
        <Text>
            Teste
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    background: {
        top: -30
    }

});
export default PlayersComponent;
