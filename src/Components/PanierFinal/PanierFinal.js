import React from 'react';
import './PanierFinal.css'

export default function PanierFinal(props) {

    return <div className='d-flex border border-dark mb-2 rounded-2 p-2 justify-content-between align-items-center'>
        <div className='div-img-panier d-flex'>
            <img src={props.img} alt='image du produit' />
        </div>
        <div className='text-article-card'>
            <h2 className='lh-1 me-5 mb-2'>{props.nom}</h2>
            <p className='lh-1 me-3 mb-2'>Prix : {(props.prix).toFixed(2)}€ (x{props.incard} = {(props.incard * props.prix).toFixed(2)}€)</p>
            <p className='lh-1 me-3 mb-2'>Quantité : {props.incard} unité{props.incard > 1 && 's'} dans le panier.</p>
        </div>
        <div>
            <button onClick={props.decr} className='btn btn-danger border'><i class="fas fa-minus"></i></button>
            <button onClick={props.incr} className='btn btn-success border'><i class="fas fa-plus"></i></button>
        </div>
        <button className='btn btn-dark'>Supprimer</button>
    </div>;
}