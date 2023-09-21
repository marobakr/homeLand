import { Routes, Route } from 'react-router-dom'
import Headr from './components/Header.jsx'
import Footer from './components/Footer.jsx'
// import pages
import Home from './pages/Home.jsx'
import PropertyDetails from './pages/PropertyDetails.jsx'

function App() {
  return (
    <>
      <Headr />
      <div className='max-w-[1440px]  mx-auto  bg-white capitalize'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/property/:id' element={<PropertyDetails />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
