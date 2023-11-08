import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export function ProfileStats() {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.imageWrapper}>
            <Image
              source={require("../assets/images/user.png")}
              style={styles.profileImage}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.nameWrapper}>
          <Text style={styles.profileText}>Olá,</Text>
          <Text style={styles.profileNameText}>Thales</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.modalButtonWrapper}>
            <Feather name={"bell"} size={35} color={"#E7F3E0"} />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginBottom: 20,
  },
  imageWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#E7F3E0",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
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
  },
  profileNameText: {
    color: "#E7F3E0",
    fontSize: 20,
    fontWeight: "bold",
  },
  modalButtonWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#149E40",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 170,
    borderRadius: 10,
  },
});