import './Cards.css'
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Cards(props) {

    const navigate = useNavigate()

    return <div onClick={() => {
        }} className="col-10 col-md-3 m-4 text-dark p-3 card-produit rounded-3">
            <div onClick={() => {
                props.getIndex()
                navigate(`/details/${props.nom}`)
                }} className='container-img-cards h-50 m-auto mb-4 rounded-1 p-3 d-flex justify-content-center'>
                <img className='mw-100 mh-100' src={props.img} alt="image du produit" />
            </div>
            <div>
                <h2 className='fs-4 mb-4 text-center text-uppercase'>{props.nom}</h2>
                <p className="fs-5"> Prix : {props.prix}€</p>
                <p className="fs-5"> Stock : {props.stock}</p>
                <div className='d-flex align-items-center justify-content-between'>
                    <button onClick={props.acheter} className='btn btn-danger text-center'>Ajouter <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
                    <p className='fs-3 m-0 mx-2'>{props.quantite ? props.quantite : ''}</p>
                    <div>
                        <button onClick={props.moins} className='btn-stock'><i class="fas fa-minus"></i></button>
                        <button onClick={props.plus} className='btn-stock'><i class="fas fa-plus"></i></button>
                    </div>
                </div>
            </div>
    </div>;
}
