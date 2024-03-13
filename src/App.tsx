import { ThemeProvider } from "@emotion/react";
import { MainText } from "./components/MainText";
import { theme } from "./components/DarkTheme";
import Navbar from "./components/Navbar";
import { Planet3DModel } from "./components/Planet3DModel";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />

        <Planet3DModel />
        <MainText />
      </ThemeProvider>
    </>
  );
}

export default App;
