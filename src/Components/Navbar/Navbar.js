import React, { useState, useEffect}  from 'react';
import './Navbar.css'
import sucette from '../../img/logosucreyOK.png'
import { useNavigate } from 'react-router-dom';
import { tab } from '@testing-library/user-event/dist/tab';


export default function Navbar(props) {

    const navigate = useNavigate()

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    const changeMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, []);
    

    return <header className='text-light bg-dark mb-4 d-flex flex-column align-items-center justify-content-center'>
        
        <img src={sucette} alt="logo sucette" className='img-sucette '/>
        <ul className={(toggleMenu || largeur > 575 ) ? 'd-flex flex-column align-items-center justify-content-center flex-sm-row navnav text-uppercase' : 'd-none'}>
            <li onClick={() => {
                props.change('')
                navigate('/')
        }} className='jaune nav mx-3'>Accueil</li>
            <li onClick={() => {
                props.change('chocolats')
                navigate('/')
            }} className='rouge nav mx-3'>Chocolats</li>
            <li onClick={() => {
                props.change('bonbons')
                navigate('/')
            }} className='vert nav mx-3'>Bonbons</li>
            <li onClick={() => {
                props.change('chips')
                navigate('/')
            }} className='jaune nav mx-3'>Chips</li>
            <li onClick={() => navigate('/panier')} className='rouge nav mx-3'>Panier</li>
            <li onClick={() => navigate('/nouvel-article')} className='vert nav mx-3'>Admin</li>
        </ul>
        <i onClick={changeMenu} class={toggleMenu ? "fas btnToggle fa-caret-square-down btnToggleOuvert" : largeur < 575 ? "fas btnToggle fa-caret-square-down" : 'd-none'}></i>
    </header>;
}