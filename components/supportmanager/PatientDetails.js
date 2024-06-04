import { View, Text, Image, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import STYLES from "../../constant/styles";
import ProductImg from "../../assets/product.png";
import ImageButton from "../common/ImageButton/ImageButton";
import ArrowLeftIcon from "../../assets/icons/black_arrow_left.png";
import React, { useEffect, useState } from "react";
import Layout from "../common/Layout/Layout";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "react-native-elements";
import ProductDetailImg from "../../assets/product_details.png";

const PatientDetails = () => {
  const navigator = useNavigation();
  const route = useRoute();
  const patient = route.params;

  console.log(patient);

  return (
    <Layout>
      <View style={styles.viewBox}>
        <ImageButton onPress={() => navigator.goBack()} source={ArrowLeftIcon} />
        <Text style={styles.headerText}>Plan details</Text>
      </View>

      <ScrollView>
        <View style={{ padding: 40, alignItems: "center" }}>
          <Image source={ProductDetailImg} style={styles.image} />
        </View>
        <View>
          <Text style={{ fontSize: 24, fontWeight: "600", marginBottom: 10 }}>Dr. Marcus Horizon</Text>
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#ADADAD", marginBottom: 10 }}>address : NYC</Text>
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#ADADAD", marginBottom: 10 }}>Phone : 09301301</Text>
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#ADADAD", marginBottom: 10 }}>
            gmail : drmarcus@gmail.com
          </Text>
          <Text style={styles.title}>pathological : </Text>
          <Text style={styles.title}>pills name :</Text>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.title}>Start day</Text>
            <Text style={styles.title}>End day</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.content}>26/06/2023</Text>
            <Text style={styles.content}>26/07/2023</Text>
          </View>

          <Text style={styles.title}>Amount</Text>
          <Text style={styles.content}>4 pills a day / 2 pills each time </Text>

          <Text style={styles.title}>Duration</Text>
          <Text style={styles.content}>10 : 00 AM</Text>

          <Text style={styles.title}>Description</Text>
          <Text style={styles.content}>Don't eat chicken</Text>
        </View>
      </ScrollView>
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
  title: {
    color: STYLES.blackText,
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },

  content: {
    color: STYLES.blackText,
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 10,
  },
});
export default PatientDetails;
