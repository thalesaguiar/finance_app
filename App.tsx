import { HomeScreen } from "@screens/HomeScreen";
import { Login } from "@screens/Login";
import theme from "./src/theme";
import { ThemeProvider } from "styled-components/native";
import { Routes } from "@routes/index";

export default function App() {
  return (

    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}