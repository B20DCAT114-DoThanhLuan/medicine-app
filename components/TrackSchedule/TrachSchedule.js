import { FlatList, Image, Text, View } from "react-native";
import DeleteIcon from "../../assets/icons/delete.png";
import React, { useEffect, useState } from "react";
import Layout from "../common/Layout/Layout";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "react-native-elements";
import ImageButton from "../common/ImageButton/ImageButton";
import ArrowLeftIcon from "../../assets/icons/black_arrow_left.png";
import { StyleSheet } from "react-native";
import STYLES from "../../constant/styles";
import ProductImg from "../../assets/product.png";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../config/firebase";

const TrachSchedule = () => {
  const navigator = useNavigation();
  const route = useRoute();
  const [plans, setPlans] = useState([]);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "plan"));
    const data = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      docData = doc.data();
      data.push({ id: doc.id, ...docData });
    });
    setPlans(data);
  };

  useEffect(() => {
    getData();
  });

  return (
    <Layout>
      <View style={styles.viewBox}>
        <ImageButton onPress={() => navigator.goBack()} source={ArrowLeftIcon} />
        <Text style={styles.headerText}>Plan management</Text>
      </View>

      <View style={styles.statusView}>
        <View style={styles.StatusButton1}>
          <Text style={styles.statusText1}>activing</Text>
        </View>
        <View style={styles.StatusButton}>
          <Text style={styles.statusText}>Completed</Text>
        </View>
        <View style={styles.StatusButton}>
          <Text style={styles.statusText}>Canceled</Text>
        </View>
      </View>
      <FlatList
        data={plans}
        contentContainerStyle={styles.productContainer}
        renderItem={({ item }) => (
          <View style={styles.itemContainer} key={item?.id}>
            <View style={{ gap: 20, justifyContent: "space-between", flexDirection: "row" }}>
              <Image source={item?.image} style={{ width: 50, height: 50 }} />
              <View>
                <Text style={styles.itemName}>{item?.name}</Text>
                <Text style={styles.itemVolume}>{item?.isBefore ? "before eating" : "after eating"}</Text>
                <Text style={styles.status}>{item?.amount}</Text>
                <Text style={styles.date}>{item?.date}</Text>
              </View>
            </View>
            <View style={{ justifyContent: "space-between", flexDirection: "row-reverse" }}>
              <ImageButton onPress={() => {}} source={DeleteIcon} />
              <Button
                title="more details"
                onPress={() => navigator.navigate("ScheduleDetails", item)}
                buttonStyle={styles.DetailsButton}
                titleStyle={styles.ButtonStyle}
              />
            </View>
          </View>
        )}
      />

      <Button
        title="Add Plan"
        onPress={() => navigator.navigate("AddPlan")}
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

  statusView: {
    width: "100%",
    flexDirection: "row",
    marginLeft: "20",
    marginright: "20",
    backgroundColor: "#FFF",
  },
  StatusButton: {
    justifyContent: "center",
    color: "#FFF",
    width: "33.33%",
    borderRadius: 10,
    backgroundColor: "#E8F3F1",
  },

  StatusButton1: {
    justifyContent: "center",
    color: "#FFF",
    width: "33.33%",
    borderRadius: 10,
    backgroundColor: "#438C85",
  },

  statusText: {
    height: "120",
    textAlign: "center",
    color: "#000",
    fontSize: 20,
    fontWeight: "400",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  statusText1: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "400",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },

  itemContainer: {
    padding: 10,
    borderRadius: 15,
    flexDirection: "colunm",
    // alignItems: "center",
    borderColor: "#E8F3F1",
    borderWidth: 2,
  },
  AddPlanButton: {
    margin: 15,
    borderRadius: 10,
  },

  DetailsButton: {
    width: 145,
    height: 46,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "600",
    color: STYLES.blackText,
  },
});

export default TrachSchedule;
