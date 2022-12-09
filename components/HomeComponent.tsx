import { View, Text, StyleSheet } from "react-native";
import Home from '../assets/Home.svg';
import HomePlay from '../assets/Home-play.svg';
import HomeHall from '../assets/Home-hall.svg';
import {SvgCssUri} from 'react-native-svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { IGame } from "../@types/game";
import LoaderComponent from "./helpers/LoaderComponent";
import GameTurnResultComponent from "./game/GameTurnResultComponent";
import * as React from "react";

const svg = resolveAssetSource(Home);
const svgButPlay = resolveAssetSource(HomePlay);
const svgButHall = resolveAssetSource(HomeHall);

function HomeComponent(){
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? <LoaderComponent/> : null}
      <View style={{opacity: loading ? 0 : 1, height: loading ? 0 : '100%'}}>
        <Text style={styles.subTitle}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at</Text>
        <SvgCssUri onPress={() => navigation.navigate('Players') } style={styles.btnPlay} width="60%" height="60%" uri={svgButPlay.uri} />
        <SvgCssUri onPress={() => navigation.navigate('StatsLoader') }  style={styles.btnHall} width="22%" height="22%" uri={svgButHall.uri} />
        <SvgCssUri style={styles.back} uri={svg.uri} width="105%" height="105%" />
      </View>
    </>
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
