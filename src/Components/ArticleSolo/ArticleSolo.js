import React from 'react';
import { useContext } from 'react';
import { ProduitsContext } from '../../data/Produits';
import './ArticleSolo.css'
import { useNavigate } from 'react-router-dom';

export default function ArticleSolo() {
    
    const {indexProd, produits} = useContext(ProduitsContext)
    const navigate = useNavigate()

    return <div>
 <div class="container d-flex justify-content-center">
     <figure class="card card-product-grid card-lg"> <a href="#" class="img-wrap"> <img src={produits[indexProd].img}/> </a>
         <figcaption class="info-wrap">
             <div class="row">
                 <div class="col-md-9 col-xs-9"> <a href="#" class="title">{produits[indexProd].nom}</a> <span class="rated">Catégorie : {produits[indexProd].categorie}</span> </div>
                 <div class="col-md-3 col-xs-3">
                     <div class="rating text-right"> <i class="star fa fa-star"></i> <i class="star fa fa-star"></i> <i class="star fa fa-star"></i> <i class="star fa fa-star"></i> <span class="rated">Noté 4.3/5</span> </div>
                 </div>
             </div>
         </figcaption>
         <div class="bottom-wrap-payment">
             <figcaption class="info-wrap">
                 <div class="row">
                     <div class="col-md-9 col-xs-9"> <a href="#" class="title">{produits[indexProd].prix} €</a> <span class="rated">Stock : {produits[indexProd].stock}</span> </div>
                     <div class="col-md-3 col-xs-3">
                         <div class="rating text-right"> n° d'article  </div> <span class="rated">{produits[indexProd].id}-{produits[indexProd].nom.length+produits[indexProd].categorie.length}</span>
                     </div>
                 </div>
             </figcaption>
         </div>
         <div class="bottom-wrap"> 
            <span class="btn btn-dark d-flex justify-content-center text-white">Acheter</span>
            <div onClick={() => {
                navigate(`/`)
                }} class="price-wrap">
                <div><span class="btn btn-danger d-flex justify-content-center"> Retour </span> </div>
            </div>
             
        </div>
    </figure>
 </div>
    </div>;
}
