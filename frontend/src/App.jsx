import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Login from "./components/Login"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
