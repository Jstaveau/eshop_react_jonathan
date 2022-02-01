import './Panier.css'
import React, { useState } from 'react';
import PanierFinal from '../../Components/PanierFinal/PanierFinal';
import { useContext, useEffect } from 'react';
import { ProduitsContext } from '../../data/Produits';
import { useNavigate } from 'react-router-dom';

export default function Panier(props) {

    const navigate = useNavigate()

    const {panier, addCard, removeCard, prixTotalIncr, prixTotal} = useContext(ProduitsContext)

    useEffect(() => {
        prixTotalIncr()
    }, []);

    const plus = (article) => {
        addCard(article)
        prixTotalIncr()
        navigate('/panier')
    }
    const moins = (article) => {
        removeCard(article)
        prixTotalIncr()
        navigate('/panier')
    }

    
    return <div className='container'>
        <h1 className='text-center'>Panier</h1>
        {panier.map((item, index) => {
            return <PanierFinal
            img={item.img}
            nom={item.nom}
            incard={item.incard}
            prix={item.prix}
            incr={() => plus(item)}
            decr={() => moins(item)}
            />
        })}

    <h2>Total à payer : {prixTotal.toFixed(2)}€</h2>
    </div>;
}
