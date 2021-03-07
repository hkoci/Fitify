import React, { useState, useEffect } from 'react';

//Import Recharts for line graph rendering
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

//Import WeightGet service
import WeightGet from '../../../services/activities/weightGet'

//Grey Tooltip text (fixes white Theme css)
import './tooltip.css'

export default function RowsGrid() {

		//State for chart data to be appended on
		const [chartData,setChartData] = useState([]);

		//Load chart data before render
		useEffect(() => {
			WeightGet.getUserData().then(dataResponse => {
				//Update Chart data
				setChartData(dataResponse);
			})
			}, []);

		return (
			<ResponsiveContainer width="99%" height={400}>
                <AreaChart width={730} height={250} data={chartData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                    <defs>
                        <linearGradient id="weight" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="activityStart"/>
                    <YAxis />
                    <CartesianGrid strokeDasharray="7 7" />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="weight" name="Weight (in kg)" stroke="#8884d8" fillOpacity={1} fill="url(#weight)" unit=" kg"/>
                </AreaChart>
			</ResponsiveContainer>
		);
	
}