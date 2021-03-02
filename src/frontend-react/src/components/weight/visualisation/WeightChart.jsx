import React, { PureComponent } from 'react';
//Import Recharts for line graph rendering
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

//Example data
const data = [
	{
		name: '01/03/2021', weight: 50
	},
	{
		name: '02/03/2021', weight: 52
	},
	{
		name: '03/03/2021', weight: 53
	},
	{
		name: '04/03/2021', weight: 50
	},
	{
		name: '05/03/2021', weight: 55
	},
	{
		name: '06/03/2021', weight: 60
	},
	{
		name: '07/03/2021', weight: 50
	},
];

export default class WeightChart extends PureComponent {
	render() {
		return (
			<ResponsiveContainer width="99%" height={400}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="weight" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="7 7" />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="weight" stroke="#8884d8" fillOpacity={1} fill="url(#weight)" />
                </AreaChart>
			</ResponsiveContainer>
		);
	}
}