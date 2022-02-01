import React, { useState, useEffect}  from 'react';
import './Navbar.css'
import sucette from '../../img/sucette.png'
import { useNavigate } from 'react-router-dom';


export default function Navbar(props) {

    // const [stickyClass, setStickyClass] = useState('');
    // useEffect(() => {
    //     window.addEventListener('scroll', stickNavbar);
    //     return () => window.removeEventListener('scroll', stickNavbar)
    // })

    const navigate = useNavigate()

    return <header className='text-light bg-dark mb-4 d-flex flex-column align-items-center justify-content-center'>
        
        <img src={sucette} alt="logo sucette" className='img-sucette my-4'/>
        <ul className='d-flex fs-5 text-uppercase'>
            <li onClick={() => {
                props.change('')
                navigate('/')
        }} className='nav mx-3'>Accueil</li>
            <li onClick={() => {
                props.change('chocolats')
                navigate('/')
            }} className='nav mx-3'>Chocolats</li>
            <li onClick={() => {
                props.change('bonbons')
                navigate('/')
            }} className='nav mx-3'>Bonbons</li>
            <li onClick={() => {
                props.change('chips')
                navigate('/')
            }} className='nav mx-3'>Chips</li>
            <li onClick={() => navigate('/panier')} className='nav mx-3'>Panier</li>
        </ul>
    </header>;
}
