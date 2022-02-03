import './Panier.css'
import React, { useState } from 'react';
import PanierFinal from '../../Components/PanierFinal/PanierFinal';
import { useContext, useEffect } from 'react';
import { ProduitsContext } from '../../data/Produits';
import { useNavigate } from 'react-router-dom';

export default function Panier(props) {

    const navigate = useNavigate()

    const {addCard, removeCard, prixTotalIncr, prixTotal, produits} = useContext(ProduitsContext)

    useEffect(() => {
        prixTotalIncr()
    }, []);

    const clearCart = () => {
        produits.forEach(e => {
            if (e.incard > 0) {
                e.stock += e.incard
                e.incard = 0
                prixTotalIncr()
            }
        });
    }

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
        // panier.splice(panier.indexOf(article), 1)
        prixTotalIncr()
        navigate('/panier')
    }

    var size = 0
    produits.forEach(e => {
        if (e.incard > 0) {
            size += e.incard
        }
    });

    const [toggle, setToggle] = useState(false);

    const changeToggle = () => {
        setToggle(!toggle)
    }

    return <div className='container'>
        {(toggle) && <div className='d-flex justify-content-center align-items-center modal-panier-container'>
            <div className='d-flex flex-column align-items-center justify-content-center p-4 modal-container rounded-3 bg-light'>
                <p>Êtes-vous sûr ? (Cette action pourra vous hanter toute votre vie)</p>
                <div className='d-flex justify-content-center w-50'>
                    <button onClick={changeToggle} className='btn m-3 btn-danger'>NON</button>
                    <button onClick={() => {
                        changeToggle()
                        clearCart()
                    }} className='btn m-3 btn-success'>OUI</button>
                </div>
            </div>
        </div>}
        <h1 className='text-center'>{size > 0 ? `Votre panier (${size})` : 'Votre 🧺 est vide 😱'}</h1>
        { size > 0 && <p onClick={changeToggle} className='vider-panier'>Vider le panier</p>}
        {produits.map((item, index) => {
            if (item.incard > 0) {
                return <PanierFinal
                img={item.img}
                nom={item.nom}
                incard={item.incard}
                prix={item.prix}
                incr={() => plus(item)}
                decr={() => moins(item)}
                supp={() => deleteArticle(item)}
            />
            }
        })}
    <div className="d-flex justify-content-between">
    <h2>{prixTotal.toFixed(2) > 0 ? `Total à payer : ${prixTotal.toFixed(2)}€` : ""}</h2>
    <div>
        <button onClick={() => {
        navigate(`/`)
        }} className="btn btn-dark mt-1 mt-sm-0 ms-0">{prixTotal.toFixed(2) > 0 ? `Poursuivre mes achats` : <i class="fas fa-long-arrow-alt-left"></i>}</button>
        { size > 0 && <button onClick={clearCart} className='btn btn-success ms-sm-1 mt-1 mt-sm-0'>Payer</button>}
    </div>
    </div>
    </div>;
}
