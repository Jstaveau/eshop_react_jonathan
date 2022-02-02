import React, {useState, useEffect, useContext} from 'react';
import Cards from '../../Components/Cards/Cards';
import { ProduitsContext } from '../../data/Produits';
import { useNavigate } from 'react-router-dom';

export default function Home(props) {

    const {produits, setProduits, getIndex, panier, addCard, removeCard} = useContext(ProduitsContext)
    
    const navigate = useNavigate()

    const ajouter = (article) => {
        addCard(article)
        navigate('/panier')
    }

    const plus = (item) => {
        if (item.stock > 0) {
            item.stock -= 1
            item.quantite += 1
        }
        navigate('/')
    }
    const moins = (item) => {
        if (item.quantite > 0) {
            item.stock += 1
            item.quantite -= 1
        }
        navigate('/')
    }

    return <div>
    <h1 className="text-center">{props.cat == '' ? 'Tous nos produits' : 'Nos ' + props.cat}</h1>
        <div className='d-flex flex-md-row flex-column justify-content-center align-items-center container-md flex-wrap'>
            {produits.map((item, index) => {
                if (item.categorie.includes(props.cat)) {
                    return <Cards 
                    nom={item.nom}
                    prix={item.prix}
                    desc={item.desc}
                    stock={item.stock}
                    img={item.img}
                    note={item.note}
                    quantite={item.quantite}
                    moins={() => moins(item)}
                    plus={() => plus(item)}
                    getIndex={() => getIndex(index)}
                    acheter={() => ajouter(item)}
                    />
                }
            })}
        </div>
    </div>;
}
