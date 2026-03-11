import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header/header'
import Catalogo from './Components/Catalogo'
import Videos from './Components/Videos'
import Foot from './Components/Foot'
import './App.css'
import { GlobalProvider } from "./context/GlobalContext";
import Portas from './Components/Portas'
import Quimicos from './Components/Quimicos'
import Maquinas from './Components/Maquinas'

function App() {
  return (
    <GlobalProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Catalogo />} />
         <Route path="/videos" element={<Videos />} />
         <Route path="/portas" element={<Portas />} />
         <Route path="/quimicos" element={<Quimicos />} />
         <Route path="/maquinas" element={<Maquinas />} />
      </Routes>

    </GlobalProvider>
  )
}

export default App
