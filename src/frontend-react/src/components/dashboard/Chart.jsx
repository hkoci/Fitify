import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, BarChart, Bar, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
// import { BarChart, Bar, CartesianGrid, Tooltip, Legend} from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

// Old Data Set
// const data = [
//   createData('Day 1', 79),
//   createData('2', 79),
//   createData('3', 80),
//   createData('4', 80),
//   createData('5', 82),
//   createData('6', 81),
//   createData('7', 79),
//   createData('8', 77),
//   createData('9', 75),
//   createData('10', 75),
//   createData('11', 76),
//   createData('12', 76),
//   createData('13', 74),
//   createData('14', 75),
//   createData('15', 74)
// ];

const dummyData = [
  {
    day: "Day 1",
    weight: 77.0
  },
  {
    day: "Day 2",
    weight: 75.5
  },
  {
    day: "Day 3",
    weight: 76.3
  },
  {
    day: "Day 4",
    weight: 75.9
  },
  {
    day: "Day 5",
    weight: 74.1
  },
  {
    day: "Day 6",
    weight: 75.2
  },
  {
    day: "Day 7",
    weight: 74.6
  },
  {
    day: "Day 8",
    weight: 73.3
  },
  {
    day: "Day 9",
    weight: 73.9
  },
  {
    day: "Day 10",
    weight: 74.4
  },
  {
    day: "Day 11",
    weight: 75.0
  },
  {
    day: "Day 12",
    weight: 75.6
  },
  {
    day: "Day 13",
    weight: 76.1
  },
  {
    day: "Day 14",
    weight: 77.5
  }
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Your Weight - last 14 Days</Title>
      <ResponsiveContainer>
        {/* <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              (kg)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart> */}

        <BarChart
          data={dummyData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
          barSize={10}
        >
          <XAxis stroke={theme.palette.text.secondary} dataKey="day" scale="point" padding={{ left: 30, right: 30 }} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}>
                (kg)
            </Label>
          </YAxis>
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="2 2" />
          <Bar dataKey="weight" fill={theme.palette.primary.main} background={{ fill: "rgba(0,0,0,0.15)" }} />
        </BarChart>

      </ResponsiveContainer>
    </React.Fragment>
  );
}