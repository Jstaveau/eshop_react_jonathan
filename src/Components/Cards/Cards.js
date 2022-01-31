import './Cards.css'

export default function Cards(props) {

    return <div className="col-3 m-4 bg-dark text-light p-3 card-produit rounded-3">
            <div className='container-img-cards bg-secondary h-50 m-auto mb-4 rounded-1 p-3 d-flex justify-content-center'>
                <img className='mw-100 mh-100' src={props.img} alt="image du produit" />
            </div>
            <div>
                <h2 className='fs-4 mb-4 text-center text-uppercase'>{props.nom}</h2>
                <p className="fs-5"> Prix : {props.prix}€</p>
                <p className="fs-5"> Stock : {props.stock}</p>
                <div className='d-flex align-items-center justify-content-between'>
                    <button className='btn btn-danger text-center'>Ajouter <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
                    <p className='fs-3 m-0 mx-2'>{props.quantite}</p>
                    <div>
                        <button onClick={props.plus} className='btn-stock'>-</button>
                        <button onClick={props.plus} className='btn-stock'>+</button>
                    </div>
                </div>
            </div>
    </div>;
}
