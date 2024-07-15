import GeneralInfosZone from '../components/GeneralInfosZone'
import '../style/Home.css'
import { getGeneralDatas } from '../services/Api'
import { useFetch } from '../utils/hooks'

function Home() {
    const { data, error } = useFetch(getGeneralDatas)
    const name = data ? data.data?.userInfos.firstName : ''

    return (
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
