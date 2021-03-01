import React, { PureComponent } from 'react';
//Import Recharts for line graph rendering
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

//Example data
const data = [
	{
		name: '01/03/2021', weight: 4000, targetWeight: 2400,
	},
	{
		name: '02/03/2021', weight: 3000, targetWeight: 1398,
	},
	{
		name: '03/03/2021', weight: 2000, targetWeight: 9800,
	},
	{
		name: '04/03/2021', weight: 2780, targetWeight: 3908,
	},
	{
		name: '05/03/2021', weight: 1890, targetWeight: 4800,
	},
	{
		name: '06/03/2021', weight: 2390, targetWeight: 3800,
	},
	{
		name: '07/03/2021', weight: 3490, targetWeight: 4300,
	},
];

export default class WeightChart extends PureComponent {
	render() {
		return (
			<div>
                <LineChart
                width={500}
                height={400}
                data={data}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                <XAxis dataKey="name" />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="weight" stroke="#ff7300" yAxisId={0} />
                <Line type="monotone" dataKey="targetWeight" stroke="#387908" yAxisId={1} />
                </LineChart>
			</div>
		);
	}
}