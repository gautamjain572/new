import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Login from "./pages/login/Login"
import BookPage from "./pages/BookPage"
import ShowTimeings from "./components/ShowTimeings"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/booking/:id' element={<BookPage />} />
        <Route path='/showtimigs' element={<ShowTimeings />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
