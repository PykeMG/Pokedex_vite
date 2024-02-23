import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Pokemon from './pages/Pokemon';
import Pokemons from './pages/Pokemons';
import Moves from './pages/Moves';
import Error from './pages/Error';
import {NextUIProvider} from "@nextui-org/react";
import './App.scss'

function App() {
  return (
    <NextUIProvider>
    <Router>
      <div className="App min-h-screen bg-white">
        <Routes>
          <Route exact path="/pokemons/:name" element = {<Pokemon />} />
          <Route exact path="/pokemons" element = {<Pokemons />} />
          <Route exact path="/moves/:id" element = {<Moves />} />
          <Route exact path="/" element = {<Pokemons />} />
          <Route path="*" element={<Error />} />
          <Route element={<Error />} />
        </Routes>
      </div>
    </Router>
    </NextUIProvider>
  );
}

export default App
