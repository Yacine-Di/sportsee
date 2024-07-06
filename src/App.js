import datas from './datas/MockedDatas.json'
import './App.css'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'

function App() {
    const ThomasActivity = datas.USER_ACTIVITY.find((userId) => (userId = 12))
    const sessions = ThomasActivity.sessions
    console.log(sessions)

    const customToolTip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div
                    className="custom-tooltip"
                    style={{
                        backgroundColor: 'red',
                        color: 'white',
                        textAlign: 'center',
                        padding: '5px',
                    }}
                >
                    <p className="label">{`${payload[0].value}kg`}</p>
                    <p className="label">{`${payload[1].value}Kcal`}</p>
                </div>
            )
        }
    }

    return (
        <div className="ChartContainer">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={800}
                    height={500}
                    data={sessions}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3" vertical={false} />
                    <XAxis dataKey={ThomasActivity.sessions.day} />
                    <YAxis orientation="right" axisLine={false} />
                    <Tooltip content={customToolTip} />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        wrapperStyle={{
                            top: '0',
                        }}
                    />
                    <Bar
                        dataKey="kilogram"
                        fill="#282D30"
                        radius={[10, 10, 0, 0]}
                        name="Poids (kg)"
                        barSize={7}
                    />
                    <Bar
                        dataKey="calories"
                        fill="#E60000"
                        radius={[10, 10, 0, 0]}
                        name="Calories brûlées (kCal)"
                        barSize={7}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default App