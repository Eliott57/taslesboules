import { ActivityIndicator, View } from "react-native";
import * as React from "react";

function LoaderComponent(){
  return (
    <View style={{flex: 1,  justifyContent: 'center', alignItems: 'center', backgroundColor: '#6D81BD', zIndex: 99999}}>
      <ActivityIndicator size="large" color="#FFFFFF"/>
    </View>
  );
}

export default LoaderComponent;
