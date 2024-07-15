import '../style/Navs.css'
import logo from '../assets/logo.png'
import biking from '../assets/biking.png'
import bodybuilding from '../assets/bodybuilding.png'
import meditation from '../assets/meditation.png'
import swimming from '../assets/swimming.png'

function Navs() {
    return (
        <>
            <nav className="topNav">
                <img className="logo" src={logo} alt="SportSee" />
                <ul className="links">
                    <li className="link">Accueil</li>
                    <li className="link">Profil</li>
                    <li className="link">Réglage</li>
                    <li className="link">Communauté</li>
                </ul>
            </nav>
            <section className="leftNav">
                <section className="activites">
                    <img
                        className="activity"
                        src={meditation}
                        alt="activité méditation"
                    />
                    <img
                        className="activity"
                        src={swimming}
                        alt="activité natation"
                    />
                    <img
                        className="activity"
                        src={biking}
                        alt="activité piscine"
                    />
                    <img
                        className="activity"
                        src={bodybuilding}
                        alt="activité musculation"
                    />
                </section>
                <p className="copyright">Copiryght, SportSee 2020</p>
            </section>
        </>
    )
}

export default Navs
