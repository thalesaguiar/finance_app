import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";

export function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.loginImage}
          source={require("@assets/loginImage.png")}
        />
      </View>
      <View style={styles.backgroundCircle}></View>
      <Text style={styles.title}>O Seu Controle Financeiro</Text>
      <Text style={styles.title}> e prosperidade começa aqui.</Text>
      <View style={styles.textCarouselWrapper}>
        <Text style={styles.textCarousel}>
          Tenha a satisfação de ter todas as suas finanças organizadas em um só
          lugar, começe a organizar sua vida financeira hoje!
        </Text>
      </View>
      <View style={styles.loginSection}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Criar uma conta</Text>
        </TouchableOpacity>
        <View style={styles.login}>
          <Text style={styles.loginText}>Você já tem uma conta ? </Text>

          <TouchableOpacity>
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
  backgroundCircle: {
    position: "relative",
    alignItems: "baseline",
    backgroundColor: "#D5F7E6",
    height: "40%",
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    marginTop: 30,
    marginBottom: 30,
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
    position: "absolute",
    zIndex: 100,
    marginLeft: 60,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  loginImage: {
    width: 300,
    height: 300,
  },
});
