import { View, Text, StyleSheet } from "react-native";
import Home from '../assets/Home.svg';
import HomePlay from '../assets/Home-play.svg';
import HomeHall from '../assets/Home-hall.svg';
import {SvgCssUri} from 'react-native-svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import { useNavigation } from '@react-navigation/native';

const svg = resolveAssetSource(Home);
const svgButPlay = resolveAssetSource(HomePlay);
const svgButHall = resolveAssetSource(HomeHall);

function HomeComponent(){
    const navigation = useNavigation();

  return (
    <View>
        <Text style={styles.subTitle}>de t'ennuyer à Noël à table en famille ? Ce jeu est fait pour toi !</Text>
        <SvgCssUri onPress={() => navigation.navigate('Players') } style={styles.btnPlay} width="60%" height="60%" uri={svgButPlay.uri} />
        <SvgCssUri onPress={() => navigation.navigate('Stats') }  style={styles.btnHall} width="22%" height="22%" uri={svgButHall.uri} />
        <SvgCssUri style={styles.back} uri={svg.uri} width="105%" height="105%" />
    </View>
  )
}

const styles = StyleSheet.create({
  btnPlay: {
    position: 'absolute',
    top: 95,
    left: 83,
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
  subTitle: {
    position: 'absolute',
    zIndex: 1,
    color : 'white',
    width: 310,
    textAlign: 'center',
    top: 130,
    left: 50,
    fontSize: 11,
    lineHeight: 15,
  }
});

export default HomeComponent;
