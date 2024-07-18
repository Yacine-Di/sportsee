import '../styles/GeneralInfosZone.css'
import DailyActivityChart from './DailyActivityChart'
import AverageSessionChart from './AverageSessionChart'
import PerformanceChart from './PerformanceChart'
import ScoreChart from './ScoreChart'
import DietInfos from './DietInfos'
import { useFetch } from '../utils/hooks'
import { getGeneralDatas } from '../services/Api'

function GeneralInfosZone() {
    const { data, error } = useFetch(getGeneralDatas)
    const userKeyDatas = data?.data?.keyData
    const userDietDatas = []

    if (userKeyDatas) {
        for (const [key, value] of Object.entries(userKeyDatas)) {
            let obj = {
                name: key,
                value: value,
                icon: '',
            }
            userDietDatas.push(obj)
        }
    }

    return error ? (
        <span className="erreur">Erreur lors du chargement des données</span>
    ) : userKeyDatas ? (
        <section className="charts__diet">
            <section className="charts">
                <DailyActivityChart />
                <section className="smallsCharts">
                    <AverageSessionChart />
                    <PerformanceChart />
                    <ScoreChart />
                </section>
            </section>
            <section className="diet-zone">
                {userDietDatas.map((dietInfo) => (
                    <div key={dietInfo.name}>
                        <DietInfos
                            dietInfoValue={dietInfo.value}
                            categorie={userDietDatas.indexOf(dietInfo)}
                        />
                    </div>
                ))}
            </section>
        </section>
    ) : null
}

export default GeneralInfosZone
