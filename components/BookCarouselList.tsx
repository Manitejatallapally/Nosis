import { View, StyleSheet, Image } from "react-native";
import { ThemedText } from "./ThemedText";
import { ScrollView } from "react-native";

export default function BookCarouselList() {
  return (
    <View style={styles.bookView}>
      <ThemedText type="title">Book of the day</ThemedText>
      <Image
        source={require("@/assets/images/bookoftheday.png")}
        style={{ width: 328, height: 196, marginTop: 10 }}
      />
      <ThemedText type="title" style={{ marginTop: 20 }}>
        Curated Pathways
      </ThemedText>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
      >
        <Image
          source={require("@/assets/images/timelesswisdom.png")}
          style={styles.pathwaysImage}
        />
        <Image
          source={require("@/assets/images/timelesswisdom.png")}
          style={styles.pathwaysImage}
        />
      </ScrollView>
      <ThemedText type="title" style={{ marginTop: 20 }}>
        New Releases
      </ThemedText>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10, marginBottom: 30 }}
      >
        <Image
          source={require("@/assets/images/meditations.png")}
          style={styles.newReleasesImage}
        />
        <Image
          source={require("@/assets/images/5amclub.png")}
          style={styles.newReleasesImage}
        />
        <Image
          source={require("@/assets/images/deepwork.png")}
          style={styles.newReleasesImage}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bookView: {
    display: "flex",
    marginTop: 30,
    paddingLeft: 20,
    flexDirection: "column",
  },
  pathwaysImage: {
    width: 262,
    height: 167,
    marginLeft: 10,
  },
  newReleasesImage: {
    width: 129,
    height: 192,
    marginLeft: 10,
    resizeMode: "cover"
    
  },
});
