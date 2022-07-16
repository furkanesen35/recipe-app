import logo from './logo.svg';
import './App.css';
import AppRouter from './router/AppRouter';
import theme from "./components/globalStyles/theme"
import {ThemeProvider} from "styled-components"
import { IconName } from "react-icons/gi";

function App() {
 return (
  <ThemeProvider theme={theme}>
   <AppRouter/>
  </ThemeProvider>
 );
}

export default App;
