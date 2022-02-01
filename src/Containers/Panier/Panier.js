import './Panier.css'
import React, { useState } from 'react';
import PanierFinal from '../../Components/PanierFinal/PanierFinal';
import { useContext, useEffect } from 'react';
import { ProduitsContext } from '../../data/Produits';

export default function Panier(props) {

    const {panier, addCard, removeCard, prixTotalIncr, prixTotal} = useContext(ProduitsContext)

    useEffect(() => {
        prixTotalIncr()
    }, [panier]);
    

    return <div className='container'>
        <h1 className='text-center'>Panier</h1>
        {panier.map((item, index) => {
            return <PanierFinal
            img={item.img}
            nom={item.nom}
            incard={item.incard}
            prix={item.prix}
            />
        })}

    <h2>Total à payer : {prixTotal.toFixed(2)}€</h2>
    </div>;
}
