import '../styles/TopNav.css'
import logo from '../assets/logo.png'

function TopNav() {
    return (
        <nav className="topNav">
            <img className="logo" src={logo} alt="SportSee" />
            <ul className="links">
                <li className="link">Accueil</li>
                <li className="link">Profil</li>
                <li className="link">Réglage</li>
                <li className="link">Communauté</li>
            </ul>
        </nav>
    )
}

export default TopNav
