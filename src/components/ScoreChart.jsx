import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import mockeDatas from '../datas/MockedDatas.json'
import '../style/ScoreChart.css'

function ScoreChart() {
    const userMainData = mockeDatas.USERS_MAIN_DATA.find(
        (usersData) => usersData.id === 18,
    )

    const score = userMainData.todayScore || userMainData.score * 100
    const rest = 100 - score

    const data = [
        { name: 'score', value: score },
        { name: 'rest', value: rest },
    ]

    const COLORS = ['#FF0000', 'transparent']

    return (
        <div className="scoreChart__Container">
            <p className="scoreChart-title">Score</p>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={260} height={260}>
                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius={60}
                        outerRadius={80}
                        cornerRadius={50}
                        labelLine={true}
                    >
                        {data.map((d, index) => (
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
