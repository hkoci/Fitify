import React, { useState, useEffect } from 'react';

//Import Recharts for line graph rendering
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

//Import SleepGet service
import SleepGet from '../../../services/activities/sleepGet'

//Grey Tooltip text (fixes white Theme css)
import './tooltip.css'

export default function SleepChart() {

		//State for chart data to be appended on
		const [chartData,setChartData] = useState([]);

		//Load chart data before render
		useEffect(() => {
			SleepGet.getUserData().then(dataResponse => {
				//Update Chart data
				setChartData(dataResponse);
			})
			}, []);

		return (
			<ResponsiveContainer width="99%" height={400}>
                <AreaChart width={730} height={250} data={chartData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                    <defs>
                        <linearGradient id="sleepingHrs" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ffa500" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#ffa500" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="sleepDate"/>
                    <YAxis />
                    <CartesianGrid strokeDasharray="7 7" />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="sleepingHrs" stroke="#ffa500" fillOpacity={1} fill="url(#sleepingHrs)" unit=" Hours"/>
                </AreaChart>
			</ResponsiveContainer>
		);
	
}