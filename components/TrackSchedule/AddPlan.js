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
import ProductImg from "../../assets/product.png";
import { db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import uuid from "react-native-uuid";

const AddPlan = () => {
  const navigator = useNavigation();
  const [isModelOpen, setIsModleOpen] = useState(false);
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({
    name: null,
    amount: null,
    isBefore: null,
    time: null,
    note: null,
  });

  const onChangeField = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleClick = () => {
    setIsModleOpen(!isModelOpen);
  };

  const toggleOverlay = async () => {
    try {
      await setDoc(doc(db, "plan", `${uuid.v4()}`), data);
      setVisible(!visible);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout style={{ position: "relative" }}>
      <View style={styles.viewBox}>
        <ImageButton onPress={() => navigator.goBack()} source={ArrowLeftIcon} />
        <Text style={styles.headerText}>Add Plan</Text>
      </View>
      <Text style={styles.topicText}>Pills name</Text>
      <TextInput
        onChangeText={(text) => onChangeField("name", text)}
        value={data?.name}
        style={styles.input}
        placeholder="pills name"
      />

      <Text style={styles.topicText}>Amount?</Text>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <TextInput
          style={styles.inputChidren}
          placeholder="blister"
          onChangeText={(text) => onChangeField("amount", text)}
        />
      </View>

      <Text style={styles.topicText}>Food & pills</Text>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <TextInput
          style={styles.inputChidren}
          placeholder="before / after eating"
          onChangeText={(text) => onChangeField("isBefore", text)}
        />
      </View>

      <Text style={styles.topicText}>Duration</Text>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <TextInput
          style={styles.inputChidren}
          placeholder="10 : 00 AM"
          onChangeText={(text) => onChangeField("time", text)}
        />
      </View>

      <Text style={styles.topicText}>Note</Text>
      <TextInput
        style={styles.input}
        placeholder="Don't eat chicken"
        onChangeText={(text) => onChangeField("note", text)}
      />

      <Button title="Done" onPress={toggleOverlay} buttonStyle={styles.AddPlanButton} titleStyle={styles.ButtonStyle} />
      <Overlay isVisible={visible} backdropStyle={{ opacity: 0.5 }}>
        <View style={styles.overlayStyle}>
          <Text style={styles.headerText}>Success</Text>
          <Text style={{ textAlign: "center" }}>You have successfully set the plan.</Text>
          <Button
            title="Go Plan"
            onPress={() => navigator.navigate("TrackSchedule")}
            buttonStyle={styles.AddPlanButton}
            titleStyle={styles.ButtonStyle}
          />
        </View>
      </Overlay>
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
    marginLeft: 20,
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
  inputChidren: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "4B726B",
    borderRadius: 50,
    width: "40%",
  },
  AddPlanButton: {
    margin: 25,
    borderRadius: 10,
  },

  overlayStyle: {
    backgroundColor: "#fff",
    width: 300,
    height: 150,
    borderRadius: 8,
  },
  OverlayContainer: {},

  AddPlanButton: {
    margin: 15,
    borderRadius: 10,
  },
});
export default AddPlan;
