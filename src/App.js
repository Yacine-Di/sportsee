import datas from './datas/MockedDatas.json'
import './App.css'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { PureComponent } from 'react'

function App() {
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

    function formatAxis(tick) {
        return weekDays[tick]
    }
    return (
        <div className="lineChart">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={ThomasAverageActivity.sessions}
                    style={{ backgroundColor: '#FF0000', borderRadius: '5px' }}
                >
                    <XAxis
                        dataKey={ThomasAverageActivity.sessions.day}
                        tickFormatter={formatAxis}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip content={customToolTip} />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="#FFFFFF"
                        activeDot={{ r: 4 }}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default App
