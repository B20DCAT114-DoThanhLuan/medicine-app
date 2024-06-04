import { View, Text} from 'react-native'
import React from 'react'
import { StyleSheet } from "react-native";
import Layout from '../common/Layout/Layout'
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "react-native-elements";
import ImageButton from "../common/ImageButton/ImageButton";
import ArrowLeftIcon from "../../assets/icons/black_arrow_left.png";
 
const TrackManager = () => {
    const navigator = useNavigation();
    const route = useRoute();
  return (
    <Layout>
        
        <View style={styles.viewBox}>
        <ImageButton onPress={() => navigator.goBack()} source={ArrowLeftIcon} />
        {/* <Text style={styles.headerText}>{route.name}</Text> */}
      </View>

        <Button 
          title='Schedule'
          onPress= {() => navigator.navigate("TrackScheduleNavigator", { screen: "TrackSchedule"})}
          buttonStyle = {styles.ScheduleButton}
          titleStyle ={styles.ButtonStyle}
        />

        <Button 
          title='SupportManager'
          onPress= {() => navigator.navigate("SupportManagerNavigator", { screen: "PatientManager"})}
          buttonStyle = {styles.SupportButton}
          titleStyle ={styles.ButtonStyle}
        />
       
    </Layout>
  )
}
const styles = StyleSheet.create({
  ScheduleButton: {
    marginTop: 50,
    borderRadius: 10,
  },
  SupportButton: {
    marginTop: 50,
    borderRadius: 10,
  },
  ButtonStyle:{

  }
});
export default TrackManager