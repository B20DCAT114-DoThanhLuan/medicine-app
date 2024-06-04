import { View, Text } from 'react-native'
import React from 'react'
import TrachSchedule from '../TrackSchedule/TrachSchedule';
import AddPlan from '../TrackSchedule/AddPlan';
import ScheduleDetails from '../TrackSchedule/ScheduleDetails';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PatientManager from '../supportmanager/PatientManager';
import Layout from '../common/Layout/Layout';

const Stack = createNativeStackNavigator();

const TrackSCheduleNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TrackSchedule" component={TrachSchedule} />
      <Stack.Screen name="AddPlan" component={AddPlan} />
      <Stack.Screen name="ScheduleDetails" component={ScheduleDetails} />
     
    </Stack.Navigator>
  )
}

export default TrackSCheduleNavigator