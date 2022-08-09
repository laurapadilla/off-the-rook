import "./index.css";
import { GlobalStyle } from "./styles";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Openings } from "./components/Openings";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Intro />
      <Openings />
    </div>
  );
}
