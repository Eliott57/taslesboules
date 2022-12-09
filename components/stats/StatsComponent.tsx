import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import BackGroundSVG from '../../assets/stats/BackgroundStats.svg';
import GiftsSVG from '../../assets/stats/GiftStats.svg';
import BackSVG from '../../assets/stats/BackStats.svg';
import {SvgCssUri} from 'react-native-svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import { useNavigation } from '@react-navigation/native';
import StatComponent from './StatComponent.tsx'

function StatsComponent(){
  const svgBackGround = resolveAssetSource(BackGroundSVG);
  const svgBack = resolveAssetSource(BackSVG);
  const svgGift = resolveAssetSource(GiftsSVG);
  const navigation = useNavigation();
  return (
    <View style={styles.contain}>
      <SvgCssUri onPress={() => navigation.navigate('Home')} style={styles.back} uri={svgBack.uri} width="18%" height="18%" />
      <ScrollView style={{top: 0}}>
          <StatComponent/>
          <StatComponent/>
          <StatComponent/>
          <StatComponent/>
      </ScrollView>
      <View style={styles.backgroundGift}>
          <SvgCssUri uri={svgGift.uri} width="110%" height="110%" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundGift: {
    position: 'absolute',
    left: 10,
    bottom: -55,
    width: 420,
    height: 405,
    zIndex: 10
  },
  back: {
    position: 'absolute',
    top: -35,
    left: 20,
    zIndex: 5
  },
  containStats: {
    position: 'absolute',
    top: 96,
    left: -10,
    width: 420,
    zIndex: 5
  },
  contain: {
    position: 'relative'
  }
});

export default StatsComponent;
