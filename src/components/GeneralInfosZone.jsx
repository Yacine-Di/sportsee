import datas from '../datas/MockedDatas.json'
import '../style/GeneralInfosZone.css'
import DailyActivityChart from './DailyActivityChart'
import AverageSessionChart from './AverageSessionChart'
import PerformanceChart from './PerformanceChart'
import ScoreChart from './ScoreChart'
import DietInfos from './DietInfos'
import { useFetch } from '../utils/hooks'
import { getGeneralDatas } from '../services/Api'

function GeneralInfosZone() {
    const { data, error } = useFetch(getGeneralDatas)
    const userKeyDatas = data ? data.data?.keyData : 0
    const arrayData = []

    if (userKeyDatas) {
        for (const [key, value] of Object.entries(userKeyDatas)) {
            let obj = {
                name: key,
                value: value,
                icon: '',
            }
            arrayData.push(obj)
        }
    }

    return (
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
                {arrayData.map((dietInfo) => (
                    <div key={dietInfo.name}>
                        <DietInfos
                            dietInfoValue={dietInfo.value}
                            categorie={arrayData.indexOf(dietInfo)}
                        />
                    </div>
                ))}
            </section>
        </section>
    )
}

export default GeneralInfosZone
