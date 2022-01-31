import React, {useState} from 'react';
import Cards from '../../Components/Cards/Cards';
import produits from '../../data/Produits';

export default function Home(props) {

    const plus = (article) => {
        article.quantite += 1
        article.stock -= 1
    }


    return <div>
    <h1 className="text-center">{props.cat == '' ? 'Tous nos produits' : 'Nos ' + props.cat}</h1>
        <div className='d-flex justify-content-center container flex-wrap'>
            {produits.map(item => {
                if (item.categorie.includes(props.cat)) {
                    return <Cards 
                    nom={item.nom}
                    prix={item.prix}
                    desc={item.desc}
                    stock={item.stock}
                    img={item.img}
                    plus={() => plus(item)}
                    />
                }
            })}
        </div>
    </div>;
}
