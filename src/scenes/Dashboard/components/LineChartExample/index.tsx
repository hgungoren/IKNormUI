import './index.less';
import * as React from 'react';
import KLineChartModel from '../../../../models/KLineChart/kLineChart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { L } from '../../../../lib/abpUtility';
interface KLineChartProps {
  data: KLineChartModel[]
}

const KLineChart: React.FunctionComponent<KLineChartProps> = ({ data }: KLineChartProps) => {
  return (
    <LineChart width={750} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey={L('Request')}  stroke="rgb(83, 29, 171)"  strokeWidth={2} activeDot={{ r: 12 }} />
      <Line type="monotone" dataKey={L('Waiting')}  stroke="rgb(250, 173, 20)" strokeWidth={2} />
      <Line type="monotone" dataKey={L('Approved')} stroke="rgb(29, 165, 122)" strokeWidth={2} />
      <Line type="monotone" dataKey={L('Cancel')}   stroke="rgb(250, 84, 28)"  strokeWidth={2} />
    </LineChart>
  );
};

export default KLineChart;