import './Nvxarticle.css'
import React from 'react';

export default function Nvxarticle() {
    return <div>
        <form className='container'>
            <label htmlFor="nom">Nom article</label>
            <input type="text" id='nom' />
            <label htmlFor="prix">Prix article (en €)</label>
            <input type="number" id='prix' />
            <label htmlFor="stock">Stock</label>
            <input type="number" id='stock' />
            <select name="categorie" id="">
                <option value="chocolats">Chocolats</option>
                <option value="bonbons">Bonbons</option>
                <option value="chips">Chips</option>
            </select>
            <button>Ajouter nouvel article</button>
        </form>
    </div>;
}
