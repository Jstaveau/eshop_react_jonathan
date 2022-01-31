import React from 'react';
import { useContext } from 'react';
import { ProduitsContext } from '../../data/Produits';

export default function ArticleSolo() {
    
    const {indexProd, produits} = useContext(ProduitsContext)

    return <div>
        <h1>{produits[indexProd].nom}</h1>
        <div>
            <img src={produits[indexProd].img} alt="" />
        </div>
        <div>
            <p>{produits[indexProd].desc}</p>
            <p>{produits[indexProd].prix}</p>
            <p>{produits[indexProd].stock}</p>
        </div>
        <div>
            <button>acheter</button>
            <p>1</p>
            <button>-</button>
            <button>+</button>
        </div>
    </div>;
}
