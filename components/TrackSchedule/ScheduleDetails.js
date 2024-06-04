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
const ScheduleDetails = () => {
  const navigator = useNavigation();
  const route = useRoute();
  const item = route.params;

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
          <Text style={{ fontSize: 24, fontWeight: "600", marginBottom: 10 }}>{item?.name}</Text>
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#ADADAD", marginBottom: 10 }}>
            {item?.isBefore ? "before eating" : "after eating"}
          </Text>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.title}>Date</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.content}>{item?.date}</Text>
          </View>

          <Text style={styles.title}>Amount</Text>
          <Text style={styles.content}>{item?.amount} pills a day </Text>

          <Text style={styles.title}>Duration</Text>
          <Text style={styles.content}>{item.time}</Text>

          <Text style={styles.title}>Description</Text>
          <Text style={styles.content}>{item?.note}</Text>
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
export default ScheduleDetails;
