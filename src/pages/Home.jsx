import GeneralInfosZone from '../components/GeneralInfosZone'
import '../styles/Home.css'
import { getGeneralDatas } from '../services/Api'
import { useFetch } from '../utils/hooks'
import { getUserFirstName } from '../common/models'

function Home() {
    const { data, error } = useFetch(getGeneralDatas)
    const name = getUserFirstName(data)

    return data === 'can not get user' || error ? (
        <span className="erreur">Erreur lors du chargement des données</span>
    ) : (
        <main className="home">
            <section className="title__congrat">
                <h1 className="home-title">
                    Bonjour <span className="title--red">{name}</span>
                </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </section>
            <GeneralInfosZone />
        </main>
    )
}

export default Home
