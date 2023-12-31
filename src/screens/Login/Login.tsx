import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Pig from "@assets/pig3.png";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const navigation = useNavigation();

  function handleNewScreen() {
    navigation.navigate("SigIn");
  }

  function handleCreateAcountScreen() {
    navigation.navigate("CreateAcount");
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Pig} style={styles.loginImage} />
      </View>
      <Text style={styles.title}>O Seu Controle Financeiro</Text>
      <Text style={styles.title}> e prosperidade começa aqui.</Text>
      <View style={styles.textCarouselWrapper}>
        <Text style={styles.textCarousel}>
          Tenha a satisfação de ter todas as suas finanças organizadas em um só
          lugar, começe a organizar sua vida financeira hoje!
        </Text>
      </View>
      <View style={styles.loginSection}>
        <TouchableOpacity
          onPress={handleCreateAcountScreen}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Criar uma conta</Text>
        </TouchableOpacity>
        <View style={styles.login}>
          <Text style={styles.loginText}>Você já tem uma conta ? </Text>

          <TouchableOpacity onPress={handleNewScreen}>
            <Text style={styles.loginButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  title: {
    color: "black",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },

  loginSection: {
    marginTop: 80,
    alignItems: "center",
  },
  button: {
    width: "80%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DBD18",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  textCarouselWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  textCarousel: {
    textAlign: "center",
    width: "75%",
    fontSize: 20,
    marginTop: 35,
    color: "gray",
  },
  login: {
    flexDirection: "row",
  },
  loginText: {
    fontSize: 18,
    marginTop: 30,
  },
  loginButton: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 28,
    color: "#1DBD18",
  },
  imageContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  loginImage: {
    width: 220,
    height: 220,
  },
});
