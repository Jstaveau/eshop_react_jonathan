import React, {createContext, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import bounty from '../img/bounty.png';
import cheetos from '../img/cheetos.png';
import coca from '../img/coca.png';
import dents from '../img/dents.png';
import doritos from '../img/doritos.png';
import dragibus from '../img/dragibus.png';
import joris from '../img/joris.png';
import lays from '../img/lays.png';
import mw from '../img/mw.png';
import pingui from '../img/pingui.png';
import rings from '../img/rings.png';
import sensation from '../img/sensation.png';
import snikers from '../img/snikers.png';
import tagada from '../img/tagada.png';
import twix from '../img/twix.png';


export const ProduitsContext = createContext()


const ProduitsContextProvider = props  => {
    
    const navigate = useNavigate()
    const [indexProd, setIndexProd] = useState(0);

    const getIndex = (index) => {
        setIndexProd(index)
    }

    const [panier, setPanier] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('indexProd');
        if (data) {
            setIndexProd(JSON.parse(data))
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('indexProd', JSON.stringify(indexProd))
    })

    useEffect(() => {
        const data = localStorage.getItem('panier');
        if (data) {
            setPanier(JSON.parse(data))
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('panier', JSON.stringify(panier))
    })

    useEffect(() => {
        const data = localStorage.getItem('produits');
        if (data) {
            setProduits(JSON.parse(data))
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('produits', JSON.stringify(produits))
    })
    useEffect(() => {
        const data = localStorage.getItem('prixTotal');
        if (data) {
            setPrixTotal(JSON.parse(data))
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('prixTotal', JSON.stringify(prixTotal))
    })

    const [prixTotal, setPrixTotal] = useState(0);

    const prixTotalIncr = () => {
        setPrixTotal(0)
        let prix = 0 
        panier.forEach(e => {
            if (e.incard > 0) {
                prix += (e.prix * e.incard)
            }
        });
        setPrixTotal(prix)
    }

    const addCard = article => {
        if(article.stock > 0){
            if (panier.includes(article)) {
                if (article.incard > 0 && article.quantite == 0) {
                    article.incard += 1
                    article.stock -= 1
                } else {
                    article.incard += article.quantite
                }
            } else {
                const newPanier = [...panier]
                newPanier.push(article)
                setPanier(newPanier)
                if (article.quantite != 0 && article.quantite) {
                    article.incard = article.quantite
                } else {
                    article.incard = 1
                    article.stock -= article.incard
                }
            }
            article.quantite = 0
        }
    }

    const removeCard = article => {
        if (article.incard == 1) {
            const newPanier = [...panier]
            newPanier.splice(newPanier.indexOf(article), 1)
            setPanier(newPanier)
            article.incard = 0
            article.stock += 1
        } else {
            article.incard -= 1
            article.stock += 1
        }
    }

    const addToProduits = (nvxProduit) => {
        const newArray = [...produits]
        newArray.unshift(nvxProduit)
        setProduits(newArray)
        }

    const [produits, setProduits] = useState ([
        {
            id: 1,
            quantite: 0,
            nom: 'Bounty',
            categorie: 'chocolats',
            prix: 2,
            img: bounty,
            note: 2,
            // desc: "Un blanc ? Un noir ? Le racisme terminé avec Bounty !",
            stock: 20
        },
        {
            id: 2,
            quantite: 0,
            nom: 'Cheetos',
            categorie: 'chips',
            note: 4,
            // desc: "Les cheetos sont les bouchées au fromage les plus appréciées et les plus populaires ! Vous ne pouvez pas manger des cheetos sans lécher le fameux CHEETLE sur le bout de vos doigts.",
            prix: 1.3,
            img: cheetos,
            stock: 20
        },
        {
            id: 3,
            quantite: 0,
            nom: 'Coca',
            categorie: 'bonbons',
            note: 3,
            prix: 4.78,
            img: coca,
            stock: 20
        },
        {
            id: 4,
            quantite: 0,
            nom: 'Dents de vampire',
            categorie: 'bonbons',
            note: 4,
            prix: 4,
            img: dents,
            stock: 20
        },
        {
            id: 5,
            quantite: 0,
            nom: 'Nacho cheese',
            categorie: 'chips',
            note: 2,
            prix: 0.8,
            img: doritos,
            stock: 10
        },
        {
            id: 6,
            quantite: 0,
            nom: 'Dragibus',
            categorie: 'bonbons',
            note: 4,
            prix: 4.34,
            img: dragibus,
            stock: 20
        },
        {
            id: 7,
            quantite: 0,
            nom: 'Bonbon Joris',
            categorie: 'bonbons',
            note: 1,
            prix: 6,
            img: joris,
            stock: 7
        },
        {
            id: 8,
            quantite: 0,
            nom: 'Lays Ricetta',
            note: 3,
            categorie: 'chips',
            prix: 2.73,
            img: lays,
            stock: 20
        },
        {
            id: 9,
            quantite: 0,
            nom: 'Milky Way',
            note: 4,
            categorie: 'chocolats',
            prix: 10,
            img: mw,
            stock: 20
        },
        {
            id: 10,
            quantite: 0,
            nom: 'Kinder Pingui',
            categorie: 'chocolats',
            note: 4,
            prix: 3.5,
            img: pingui,
            stock: 20
        },
        {
            id: 11,
            quantite: 0,
            nom: 'Onion rings chips',
            categorie: 'chips',
            note: 1,
            prix: 1.7,
            img: rings,
            stock: 20
        },
        {
            id: 12,
            quantite: 0,
            nom: 'Lays sensation',
            note: 3,
            categorie: 'chips',
            prix: 2,
            img: sensation,
            stock: 20
        },
        {
            id: 13,
            quantite: 0,
            nom: 'Snikers',
            categorie: 'chocolats',
            note: 3,
            prix: 2.2,
            img: snikers,
            stock: 20
        },
        {
            id: 14,
            quantite: 0,
            nom: 'Fraises tagada',
            categorie: 'bonbons',
            note: 4,
            prix: 3.4,
            img: tagada,
            stock: 20
        },
        {
            id: 15,
            quantite: 0,
            nom: 'Twix',
            categorie: 'chocolats',
            note: 2,
            prix: 2.7,
            img: twix,
            stock: 20
        }
    ])

    return (
        <ProduitsContext.Provider value={{addToProduits, produits, setProduits, getIndex, indexProd, panier, addCard, removeCard, prixTotalIncr, prixTotal}}>
            {props.children}
        </ProduitsContext.Provider>
    )
}

export default ProduitsContextProvider