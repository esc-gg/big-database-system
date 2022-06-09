import $ from './style.module.scss';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  responsive: true,
  cutout: '65%',
  color: 'rgb(200, 200, 200)',
  scales: {
    y: {
      ticks: { color: 'rgb(200, 200, 200)' },
    },
    x: {
      ticks: { color: 'rgb(200, 200, 200)' },
    },
  },
};

interface Props {
  data: ChartData<'bar', number[], string>;
}

export default function BarChart({ data }: Props) {
  return (
    <div className={$.chart}>
      <Bar options={options} data={data} />
    </div>
  );
}
