import { HomeScreen } from "@screens/HomeScreen";
import { Login } from "@screens/Login";
import theme from "./theme";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  return (

    <ThemeProvider theme={theme}>

      <HomeScreen />
      
    </ThemeProvider>
  );
}