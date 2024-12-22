import { ThemedText } from "@/components/ThemedText";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Button,
  Text,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Dimensions } from "react-native";
import { ScrollView } from "react-native";
import { useState } from "react";
import { Link, router } from "expo-router";

const { width, height } = Dimensions.get("window");
const ratio = width / 360;

export default function HomeScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("english");

  return (
    <ScrollView style={styles.background}>
      <Image
        source={require("@/assets/images/homelogo.png")}
        style={{
          width: width,
          height: 416 * ratio,
        }}
      />
      <ThemedText
        type="title"
        darkColor="true"
        style={{ marginTop: 50, marginLeft: 20 }}
      >
        Select Language
      </ThemedText>
      <ThemedText type="default" darkColor="true" style={{ marginInline: 20 }}>
        You can change the language in your profile settings after signingin.
      </ThemedText>
      <View style={styles.languageView}>
        <LanguageButtonComponent
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          language="english"
          greeting="Hello!"
        />
        <LanguageButtonComponent
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          language="हिंदी"
          greeting="नमस्ते"
        />
      </View>

      <TouchableOpacity
        style={styles.startButton}
        activeOpacity={0.7}
        onPress={() =>
          router.navigate("./(tabs)/Home", { relativeToDirectory: true })
        }
      >
        <ThemedText
          type="subtitle"
          darkColor="true"
          style={{ marginLeft: 20, color: "white" }}
        >
          Get Started
        </ThemedText>
        <MaterialIcons name="start" size={35} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
}

function LanguageButtonComponent(props: any) {
  return (
    <TouchableOpacity
      style={{
        ...styles.buttonView,
        borderWidth: props.selectedLanguage === props.language ? 2 : 0,
      }}
      onPress={() => props.setSelectedLanguage(props.language)}
      activeOpacity={1}
    >
      <View>
        <Text style={styles.greeting}>{props.greeting}</Text>
        <Text style={styles.language}>{props.language}</Text>
      </View>
      <View></View>
      {props.selectedLanguage === props.language ? (
        <AntDesign name="checkcircle" size={24} color="#01383D" />
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F4EDE7",
  },

  greeting: {
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 36,
  },
  language: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 21,
  },
  languageView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginInline: 20,
  },
  buttonView: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "#01383D",
    width: "40%",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
  },
  startButton: {
    backgroundColor: "#01383D",
    marginTop: 40,
    marginRight: 20,
    display: "flex",
    flexDirection: "row",
    width: "45%",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "flex-end",
  },
});
