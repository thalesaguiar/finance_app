import { Login } from "@screens/Login/Login";
import { theme } from "./src/theme";
import { ThemeProvider } from "styled-components/native";
import { Routes } from "@routes/index";
import { SiginScreen } from "@screens/SiginScreen";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
