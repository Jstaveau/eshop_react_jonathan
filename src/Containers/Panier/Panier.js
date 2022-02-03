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

    const deleteArticle = (article) => {
        article.stock += article.incard 
        article.incard = 0
        panier.splice(panier.indexOf(article), 1)
        prixTotalIncr()
        navigate('/panier')
    }
    
    const size = panier.length

    return <div className='container'>
        <h1 className='text-center'>{size > 0 ? `Votre panier (${size})` : 'Votre panier est vide :('}</h1>
        {panier.map((item, index) => {
            return <PanierFinal
            img={item.img}
            nom={item.nom}
            incard={item.incard}
            prix={item.prix}
            incr={() => plus(item)}
            decr={() => moins(item)}
            supp={() => deleteArticle(item)}
            />
        })}
    <div className="d-flex justify-content-between">
    <h2>{prixTotal.toFixed(2) > 0 ? `Total à payer : ${prixTotal.toFixed(2)}€` : ""}</h2>
    <button onClick={() => {
    navigate(`/`)
    }} className="btn btn-dark ms-0">{prixTotal.toFixed(2) > 0 ? `Poursuivre mes achats` : <i class="fas fa-long-arrow-alt-left"></i>}</button>
    </div>
    </div>;
}
