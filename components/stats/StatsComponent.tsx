import { View, Text } from "react-native";
import OptionsComponent from '../questions/OptionsComponent.tsx';
import OptionButtonComponent from '../questions/OptionButtonComponent.tsx';



function StatsComponent(){
  return (
    <View>
      <Text>
        Test Stats Component
      </Text>
      <OptionButtonComponent label="A" />
    </View>
  )
}

export default StatsComponent;
