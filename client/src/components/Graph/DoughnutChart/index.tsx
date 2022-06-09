import $ from './style.module.scss';
import { Chart as ChartJS, ChartData, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  data: ChartData<'doughnut', number[], string>;
  ratio: number;
}

const options = {
  responsive: true,
  cutout: '65%',
  color: 'rgb(200, 200, 200)',
};

export default function DoughnutChart({ data, ratio }: Props) {
  return (
    <div className={$.chart}>
      <strong>{ratio}%</strong>
      <Doughnut data={data} options={options} />
    </div>
  );
}
