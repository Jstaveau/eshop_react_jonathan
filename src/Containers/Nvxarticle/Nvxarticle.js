import './Nvxarticle.css'
import React, { useState } from 'react';
import { useContext } from 'react';
import { ProduitsContext } from '../../data/Produits';

export default function Nvxarticle() {

    const {addToProduits, produits} = useContext(ProduitsContext)

    const [article, setArticle] = useState({
        id: produits.length + 1,
        quantite: 0,
        nom : '',
        stock: 0,
        prix: 0,
        categorie : 'chocolats',
        img: '',
    });

    const nomArticle = (e) => {
        article.nom = e.target.value
        console.log(article);
    }
    const stockArticle = (e) => {
        article.stock = parseFloat(e.target.value)
        console.log(article);
    }
    const prixArticle = (e) => {
        article.prix = parseFloat(e.target.value)
        console.log(article);
    }
    const categorieArticle = (e) => {
        article.categorie = e.target.value
        console.log(article);
    }

    const imgArticle = (e) => {
        article.img = e.target.value
    }

    return <div>
        <form onSubmit={() => addToProduits(article)} className='container d-flex flex-column align-items-start'>
            <div className='d-flex align-items-center justify-content-center w-100'>
                <div className='w-50 m-2 d-flex flex-column'>
                    <label className='fw-bold mt-3' htmlFor="nom">Nom article</label>
                    <input onChange={nomArticle} type="text" id='nom' required="required"/>
                </div>
                <div className='w-50 m-2 d-flex flex-column'>
                    <label className='fw-bold mt-3' htmlFor="prix">Prix article (en €)</label>
                    <input onChange={prixArticle} type="number" id='prix' required="required"/>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center w-100'>
                <div className='w-50 m-2 d-flex flex-column'>
                    <label className='fw-bold mt-3' htmlFor="stock">Stock</label>
                    <input onChange={stockArticle} type="number" id='stock' required="required"/>
                </div>
                <div className='w-50 m-2 d-flex flex-column'>
                    <label className='fw-bold mt-3' htmlFor="categorie">Choisissez une catégorie</label>
                    <select onChange={categorieArticle} name="categorie" id="categorie" required="required">
                        <option value="chocolats">Chocolats</option>
                        <option value="bonbons">Bonbons</option>
                        <option value="chips">Chips</option>
                    </select>
                </div>
            </div>
            <div className='w-50 m-2 d-flex flex-column'>
                <label className='fw-bold mt-3' htmlFor="image">Choisissez une image pour votre article</label>
                <input onChange={imgArticle} type="url" id='image' required="required"/>
            </div>
                <button className='btn btn-success m-auto'>Ajouter un nouvel article</button>
        </form>
    </div>;
}
