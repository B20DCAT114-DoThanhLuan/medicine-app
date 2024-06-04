import { FlatList, Image, Text, View, TextInput } from "react-native";
import DeleteIcon from "../../assets/icons/delete.png";
import React, { useEffect, useState } from "react";
import Layout from "../common/Layout/Layout";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Overlay } from "react-native-elements";
import ImageButton from "../common/ImageButton/ImageButton";
import ArrowLeftIcon from "../../assets/icons/black_arrow_left.png";
import { StyleSheet } from "react-native";
import STYLES from "../../constant/styles";

const addPatient = () => {
  const navigator = useNavigation();
  const [data, setData] = useState({
    name: null,
    address: null,
    phone: null,
    email: null,
    pathological: null,
  });

  const onChangeField = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  return (
    <Layout>
      <View style={styles.viewBox}>
        <ImageButton onPress={() => navigator.goBack()} source={ArrowLeftIcon} />
        <Text style={styles.headerText}>Add Patient</Text>
      </View>

      <Text style={styles.topicText}>Name patient</Text>
      <TextInput onChangeText={(t) => onChangeField("name", t)} style={styles.input} placeholder="Name patient" />

      <Text style={styles.topicText}>Address</Text>
      <TextInput style={styles.input} placeholder="Address" onChangeText={(t) => onChangeField("address", t)} />

      <Text style={styles.topicText}>Phone</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone"
        keyboardType="numeric"
        onChangeText={(t) => onChangeField("phone", t)}
      />

      <Text style={styles.topicText}>Email</Text>
      <TextInput style={styles.input} placeholder="Email" onChangeText={(t) => onChangeField("email", t)} />

      <Text style={styles.topicText}>Pathological</Text>
      <TextInput
        style={styles.input}
        placeholder="Pathological"
        onChangeText={(t) => onChangeField("pathological", t)}
      />

      <Button
        title="Add Plan"
        onPress={() => navigator.navigate("addPlan", data)}
        buttonStyle={styles.AddPlanButton}
        titleStyle={styles.ButtonStyle}
      />
    </Layout>
  );
};
const styles = StyleSheet.create({
  viewBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },

  headerText: {
    color: STYLES.blackText,
    fontSize: 24,
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
    transform: [{ translateX: -8 }],
  },
  topicText: {
    color: STYLES.blackText,
    fontSize: 20,
    fontWeight: "400",
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "4B726B",
    borderRadius: 50,
  },
  AddPlanButton: {
    margin: 15,
    borderRadius: 10,
  },
});

export default addPatient;
