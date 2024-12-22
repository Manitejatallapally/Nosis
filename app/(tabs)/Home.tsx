import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { ScrollView } from "react-native";
import BookCarouselList from "@/components/BookCarouselList";

export default function HomeTab() {
  return (
    <SafeAreaView>
      <ThemedView>
        <View style={styles.header}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("@/assets/images/logodark.png")} />
            <Text style={styles.headerTitle}>nosis</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: "55%",
            }}
          >
            <TouchableOpacity style={styles.languageView}>
              <Image
                source={require("@/assets/images/translatelogo.png")}
                style={{ width: 20, height: 20 }}
              />
              <ThemedText type="defaultSemiBold">eng</ThemedText>
              <AntDesign name="down" size={13} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.languageView}>
              <ThemedText type="defaultSemiBold">PRO</ThemedText>
            </TouchableOpacity>
            <Image
              source={require("@/assets/images/atomicsymbol.png")}
              style={{ width: 26, height: 26, borderRadius: 13 }}
            />
          </View>
        </View>
        <View style={styles.dashedLine}></View>
        <Image
          source={require("@/assets/images/dailylearning.png")}
          style={styles.learning}
        />
        <ScrollView
          horizontal={true}
          style={{ width: "100%", paddingLeft: 10 }}
          showsHorizontalScrollIndicator={false}
        >
          <BookCategory
            category="Meditation"
            icon={
              <MaterialCommunityIcons
                name="meditation"
                size={16}
                color="#012225"
              />
            }
          />
          <BookCategory
            category="Philosophy"
            icon={
              <Image
                source={require("@/assets/images/philosophy.png")}
                style={{
                  width: 16,
                  height: 16,
                }}
              />
            }
          />
          <BookCategory
            category="Ways of Life"
            icon={
              <Image
                source={require("@/assets/images/waysoflife.png")}
                style={{
                  width: 16,
                  height: 16,
                }}
              />
            }
          />
        </ScrollView>
        <BookCarouselList/>
      </ThemedView>
    </SafeAreaView>
  );
}

function BookCategory(props: any) {
  return (
    <View style={styles.categoryView}>
      {props.icon}
      <ThemedText
        type="defaultSemiBold"
        style={{ color: "#012225", marginLeft: 10 }}
      >
        {props.category}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    paddingBlock: 10,
    paddingInline: 20,
    justifyContent: "space-between",
  },

  languageView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    paddingInline: 8,
    paddingBlock: 3,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 30,
    color: "#01383D",
    marginLeft: 10,
  },
  dashedLine: {
    backgroundColor: "#00000014",
    width: "100%",
    height: 2,
    marginTop: 15,
  },
  learning: {
    width: 328,
    height: 88,
    marginInline: "auto",
    marginTop: 15,
  },

  categoryView: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 30,
    marginLeft: 10,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  },
});
