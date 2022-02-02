import React from 'react';
import { useContext } from 'react';
import { ProduitsContext } from '../../data/Produits';
import './ArticleSolo.css'
import { useNavigate } from 'react-router-dom';

export default function ArticleSolo() {

    const { indexProd, produits, addCard } = useContext(ProduitsContext)
    const navigate = useNavigate()

    const acheter = (article) => {
        addCard(article)
        navigate('/panier')
    }

    return <div>
        <div className="container d-flex justify-content-center">
            <div className="card card-product-grid card-lg bg-dark"> <a href="#" className="img-wrap"> <img src={produits[indexProd].img} /> </a>
                <div className="info-wrap">
                    <div className="row">
                        <div className="col-md-9 col-xs-9"> <a href="#" className="title text-light">{produits[indexProd].nom}</a> <span className="rated">Catégorie : {produits[indexProd].categorie}</span> </div>
                        <div className="col-md-3 col-xs-3">
                            <div className="text-end"> 
                            {Array.from({length: produits[indexProd].note}).map((item, index) => {
                                return <i className="star fa fa-star"></i>
                            })} {Array.from({length: 4 - produits[indexProd].note}).map((item, index) => {
                                return <i className="star_gray fa fa-star"></i> 
                            })}
                                <span className="rated">Noté {produits[indexProd].note}/4</span>
                                {/* <i className="star_gray fa fa-star"></i>  */}
                                </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-wrap-payment">
                    <div className="info-wrap">
                        <div className="row">
                            <div className="col-md-9 col-xs-9"> <a href="#" className="title text-light">{produits[indexProd].prix} €</a> <span className="rated">Stock : {produits[indexProd].stock}</span> </div>
                            <div className="col-md-3 col-xs-3 text-end">
                                <div className="ratin text-end text-light"> n° d'article  
                                </div> 
                                <span className="rated">{produits[indexProd].id}-{produits[indexProd].nom.length + produits[indexProd].categorie.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-wrap">
                    <span onClick={() => acheter(produits[indexProd])} className="btn btn-success d-flex justify-content-center text-white">Ajouter au panier</span>
                    <div onClick={() => {
                        navigate(`/`)
                    }} className="price-wrap py-2">
                        <div>
                            <span className="btn btn-danger d-flex justify-content-center">Retour</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>;
}
