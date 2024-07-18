import '../styles/PerformanceChart.css'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from 'recharts'
import { useFetch } from '../utils/hooks'
import { getPerformanceInfos } from '../services/Api'

function PerformanceChart() {
    const { data, error } = useFetch(getPerformanceInfos)
    const userPerformance = data?.data?.data

    const kinds = [
        'Intensité',
        'Vitesse',
        'Force',
        'Endurance',
        'Energie',
        'Cardio',
    ]

    const formatedData = userPerformance
        ? userPerformance.map((d) => {
              return { value: d.value, kind: kinds[d.kind - 1] }
          })
        : null

    return !formatedData || error ? (
        <span className="erreur">Données non conformes</span>
    ) : (
        <div className="radarChart">
            <ResponsiveContainer
                width="100%"
                height="100%"
                style={{ backgroundColor: '#282D30', borderRadius: '5px' }}
            >
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    data={formatedData}
                    margin={{
                        top: 10,
                        right: 10,
                        left: 10,
                        bottom: 10,
                    }}
                >
                    <PolarGrid />
                    <PolarAngleAxis
                        dataKey="kind"
                        stroke="#FFF"
                        fontSize={12}
                    />
                    <Radar
                        dataKey="value"
                        stroke="#8884d8"
                        fill="#FF0101"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PerformanceChart
