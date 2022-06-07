import $ from './style.module.scss';
import {
  Chart as ChartJS,
  ChartData,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface Props {
  data: ChartData<'line', number[], string>;
}

export default function LineChart({ data }: Props) {
  return (
    <div className={$.chart}>
      <Line data={data} />
    </div>
  );
}
