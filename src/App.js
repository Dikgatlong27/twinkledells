import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Home, About, Contact, Products } from './Pages'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
