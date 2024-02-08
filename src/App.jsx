import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Pokemon from "./pages/Pokemon";
import Pokemons from './pages/Pokemons';
import {NextUIProvider} from "@nextui-org/react";
import './App.scss'

function App() {
  return (
    <NextUIProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/pokemons/:name" element = {<Pokemon />} />
          <Route path="/pokemons" element = {<Pokemons />} />
          <Route path="/" element = {<Pokemons />} />
        </Routes>
      </div>
    </Router>
    </NextUIProvider>
  );
}

export default App
