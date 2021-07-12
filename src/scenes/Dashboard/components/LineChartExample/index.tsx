import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Pazartesi',  talep: 4000, bekleyen: 2400, amt: 2400, onaylanan: 1000 , iptal: 1000},
  { name: 'Salı',       talep: 3000, bekleyen: 1398, amt: 2210, onaylanan: 2000 , iptal: 2000},
  { name: 'Çarşamba',   talep: 2000, bekleyen: 9800, amt: 2290, onaylanan: 3000 , iptal: 3000},
  { name: 'Perşembe',   talep: 2780, bekleyen: 3908, amt: 2000, onaylanan: 4000 , iptal: 4000},
  { name: 'Cuma',       talep: 1890, bekleyen: 4800, amt: 2181, onaylanan: 5000 , iptal: 5000},
  { name: 'Cumartesi',  talep: 2390, bekleyen: 3800, amt: 2500, onaylanan: 6000 , iptal: 6000},
  { name: 'Pazar',      talep: 3490, bekleyen: 4300, amt: 2400, onaylanan: 7000 , iptal: 7000} 
];

const LineChartExample: React.SFC = () => {
  return (
    <LineChart width={1150} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="talep"     stroke="#8884d8" activeDot={{ r: 12 }} />
      <Line type="monotone" dataKey="bekleyen"   stroke="#82ca9d" />
      <Line type="monotone" dataKey="onaylanan"      stroke="#ad6800" />
      <Line type="monotone" dataKey="iptal"      stroke="#ad6800" />
    </LineChart>
  );
};

export default LineChartExample;
