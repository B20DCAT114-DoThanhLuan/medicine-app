import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../common/Layout/Layout';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PatientManager from '../supportmanager/PatientManager';
import PatientDetails from '../supportmanager/PatientDetails';
import addPatient from '../supportmanager/addPatient';
import addPlan from '../supportmanager/addPlan';

const SupportManagerNavigator = () => {

    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="addPatient" component={addPatient} />
      <Stack.Screen name="addPlan" component={addPlan} />
      <Stack.Screen name="PatientDetails" component={PatientDetails} />
      <Stack.Screen name="PatientManager" component={PatientManager} />
    </Stack.Navigator>
  )
}

export default SupportManagerNavigator