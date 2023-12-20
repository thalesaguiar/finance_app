import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Container } from "./styles";

export function ProfileStats() {
  return (
    <Container>
      <View style={styles.imageTextWrapper}>
        <TouchableOpacity>
          <View style={styles.imageWrapper}>
            <Image
              source={require("@assets/user.png")}
              style={styles.profileImage}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.nameWrapper}>
          <Text style={styles.profileText}>Olá,</Text>
          <Text style={styles.profileNameText}>Thales</Text>
        </View>
      </View>

      <TouchableOpacity>
        <View style={styles.modalButtonWrapper}>
          <Feather name={"bell"} size={35} color={"#E7F3E0"} />
        </View>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#E7F3E0",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginLeft: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  nameWrapper: {
    flexDirection: "column",
  },
  profileText: {
    color: "#E7F3E0",
    fontSize: 16,
    marginLeft: 5,
  },
  profileNameText: {
    color: "#E7F3E0",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5,
  },
  modalButtonWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#149E40",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 20,
  },
  ts: {
    flexDirection: "row",
    justifyContent: "center",
  },
  imageTextWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
