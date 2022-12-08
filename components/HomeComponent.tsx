import { View, Text, StyleSheet } from "react-native";
import Home from '../assets/Home.svg';
import HomePlay from '../assets/Home-play.svg';
import HomeHall from '../assets/Home-hall.svg';
import {SvgCssUri} from 'react-native-svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

const svg = resolveAssetSource(Home);
const svgButPlay = resolveAssetSource(HomePlay);
const svgButHall = resolveAssetSource(HomeHall);

function HomeComponent(){
  return (
    <View>
        <SvgCssUri style={styles.btnPlay} width="60%" height="60%" uri={svgButPlay.uri} />
        <SvgCssUri style={styles.btnHall} width="22%" height="22%" uri={svgButHall.uri} />
        <SvgCssUri style={styles.back} uri={svg.uri} width="105%" height="105%" />
    </View>
  )
}

const styles = StyleSheet.create({
  btnPlay: {
    position: 'absolute',
    top: 95,
    left: 90,
    zIndex: 1,
  },
  btnHall: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    zIndex: 1,
  },
  back: {
    top: -30
  },
});

export default HomeComponent;
