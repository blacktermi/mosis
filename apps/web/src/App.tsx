import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Boutique from './pages/Boutique'
import Formation from './pages/Formation'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/formation" element={<Formation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
