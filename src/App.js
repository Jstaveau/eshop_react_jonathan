import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import produits from './data/Produits'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Containers/Home/Home';
import { useState } from 'react';
import Footer from './Containers/Footer/Footer'

function App() {

  const [cat, setCat] = useState('');

    const changeCat = newcat => {
        setCat(newcat)
    }

  return (
  <>
      <Navbar change={changeCat}/>
      <Routes>
        <Route path='/' element={<Home
        cat={cat}
        />}/>
        <Route />
      </Routes>
      <Footer/>
      </>
  );
}

export default App;
