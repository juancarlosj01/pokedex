import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import Pokemon from './components/Pokemon'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<Pokemon />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
