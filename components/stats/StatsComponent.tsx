import { IQuestion } from "../../@types/question";
import questionsStore from "../../store/QuestionsStore";
import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Pressable, Text } from "react-native";
import GiftsSVG from '../../assets/stats/GiftStats.svg';
import BackSVG from '../../assets/stats/BackStats.svg';
import {SvgCssUri} from 'react-native-svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import { useNavigation } from '@react-navigation/native';
import StatComponent from "./StatComponent";
import LoaderComponent from "../helpers/LoaderComponent";
import * as React from "react";

type Props = {
  questions: IQuestion[]
}

function StatsComponent(props: Props){
  const [stats, setStats] = useState<{ question: IQuestion; percentageA: number; percentageB: number; }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const anonym = async () => {
      const statsArray = [];

      for(const question of props.questions){
        const data = await questionsStore._retrieveData(question.id);

        let percentageA = 0;
        let percentageB = 0;

        if(data){
          const parsedData = JSON.parse(data);
          const numberOfAnswers = parsedData.optionANumber + parsedData.optionBNumber;
          percentageA = parseInt(((parsedData.optionANumber * 100)/numberOfAnswers).toFixed(0));
          percentageB = parseInt(((parsedData.optionBNumber * 100)/numberOfAnswers).toFixed(0));
        }

        statsArray.push({
          question,
          percentageA,
          percentageB
        })
      }

      setStats(statsArray);
    }
    anonym();

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const svgBack = resolveAssetSource(BackSVG);
  const svgGift = resolveAssetSource(GiftsSVG);
  const navigation = useNavigation();
  return (
    <>
      {loading ? <LoaderComponent/> : null}
      <View style={styles.contain}>
        <SvgCssUri onPress={() => navigation.navigate('Home')} style={styles.back} uri={svgBack.uri} width="18%" height="18%" />
        <ScrollView style={{top: 0}}>
          {stats.length ? stats.map((stat, index) => <StatComponent key={index} question={stat.question} percentageA={stat.percentageA} percentageB={stat.percentageB}/>) : null}
        </ScrollView>
        <View style={styles.backgroundGift}>
          <SvgCssUri uri={svgGift.uri} width="110%" height="110%" />
        </View>
      </View>
    </>
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
