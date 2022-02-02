import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Containers/Home/Home';
import { useState } from 'react';
import Footer from './Containers/Footer/Footer'
import ProduitsContextProvider from './data/Produits';
import ArticleSolo from './Components/ArticleSolo/ArticleSolo';
import Panier from './Containers/Panier/Panier';
import Nvxarticle from './Containers/Nvxarticle/Nvxarticle';
import PageNotFound from './Components/PageNotFound/PageNotFound';

function App() {

  const [cat, setCat] = useState('');

    const changeCat = newcat => {
        setCat(newcat)
    }

  return (
  <ProduitsContextProvider>
      <Navbar change={changeCat}/>
      <Routes>
        <Route path='/' element={<Home
        cat={cat}
        />}/>
        <Route path='/details/:artcile' element={<ArticleSolo/>}/>
        <Route path='/panier' element={<Panier/>}/>
        <Route path='/nouvel-article' element={<Nvxarticle/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
      </ProduitsContextProvider>
  );
}

export default App;
