import './Connexion.css'
import { useNavigate } from 'react-router-dom';

export default function Connexion() {

    const navigate = useNavigate()
    const connexionparxemple = () => {
        navigate('/nouvel-article')
    }
    return <>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-2"></div>
                <div className="col-lg-6 col-md-8 login-box m-2 rounded">
                    <div className="col-lg-12 login-key">
                        <i className="fa fa-key" aria-hidden="true"></i>
                    </div>
                    <div className="col-lg-12 login-title">
                        ADMIN PANEL
                    </div>

                    <div className="col-lg-12 login-form">
                        <div className="col-lg-12 login-form">
                            <form onSubmit={connexionparxemple}>
                                <div className="form-group">
                                    <label className="form-control-label text-uppercase">Nom d'utilisateur</label>
                                    <input type="text" className="input-login form-control" required="required"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label text-uppercase">Mot de passe</label>
                                    <input type="password" className="form-control" required="required"/>
                                </div>

                                <div className="col-lg-12 loginbttm">
                                    <div className="col-lg-6 login-btm login-text">
                                    </div>
                                    <div className="col-lg-6 login-btm login-button ms-5">
                                        <button type="submit" className="btn btn-light text-uppercase">Connexion</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2"></div>
                </div>
            </div>
        </div>
    </>
}