import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import datas from '../datas/MockedDatas.json'
import '../style/AverageTimeSession.css'

function AverageSessionChart() {
    const ThomasAverageActivity = datas.USER_AVERAGE_SESSIONS.find(
        (userId) => (userId = 12),
    )
    const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    const customToolTip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div
                    className="custom-tooltip"
                    style={{
                        backgroundColor: 'white',
                        color: 'black',
                        textAlign: 'center',
                    }}
                >
                    <p className="time__label">{`${payload[0].value}min`}</p>
                </div>
            )
        }
    }

    return (
        <div className="lineChart__container">
            <p className="lineChart__title">Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={ThomasAverageActivity.sessions}
                    style={{ backgroundColor: '#FF0000', borderRadius: '5px' }}
                >
                    <defs>
                        <linearGradient id="linear">
                            <stop
                                offset="0%"
                                stopColor="rgba(255, 255, 255, 0.4)"
                            />
                            <stop
                                offset="100%"
                                stopColor="rgba(255, 255, 255, 1)"
                            />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey={ThomasAverageActivity.sessions.day}
                        tickFormatter={(tick) => weekDays[tick]}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'rgba(255, 255, 255, 0.7)' }}
                        padding={{ left: 10, right: 10 }}
                    />
                    <Tooltip content={customToolTip} />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="url(#linear)"
                        strokeWidth={2}
                        activeDot={{ r: 4 }}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AverageSessionChart
