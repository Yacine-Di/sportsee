import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import '../styles/ScoreChart.css'
import { useFetch } from '../utils/hooks'
import { getGeneralDatas } from '../services/Api'

function ScoreChart() {
    const { data, error } = useFetch(getGeneralDatas)
    const userScore = data?.data
    const score = userScore?.todayScore * 100 || userScore?.score * 100
    const rest = 100 - score

    const chartDatas = [
        { name: 'score', value: score },
        { name: 'rest', value: rest },
    ]

    const COLORS = ['#FF0000', 'transparent']

    return !userScore || error ? (
        <span className="erreur">Données non conformes</span>
    ) : (
        <div className="scoreChart__Container">
            <p className="scoreChart-title">Score</p>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={260} height={260}>
                    <Pie
                        data={chartDatas}
                        dataKey="value"
                        innerRadius={60}
                        outerRadius={80}
                        cornerRadius={50}
                        labelLine={true}
                    >
                        {chartDatas.map((d, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="text-circle">
                <p className="score">
                    <span className="score--bold">{score}%</span>
                    <br />
                    de votre objectif
                </p>
            </div>
        </div>
    )
}

export default ScoreChart
