import { useState } from 'react';
import { BarChart, DoughnutChart, LineChart } from '../components/Graph';
import SearchBar from '../components/SearchBar';
import GameSummary from '../components/GameSummary';
import { summaryInfoMocks } from '../mock/summaryInfo';
import $ from './style.module.scss';

export default function RecordListPage() {
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const [doughnutData, setDoughnutData] = useState({
    labels: ['WIN', 'LOSE'],
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ['#5383e8', '#f12c2c'],
      },
    ],
  });
  const winlose = doughnutData.datasets[0].data;
  const ratio = (winlose[0] / winlose.reduce((acc, curr) => acc + curr, 0)) * 100;

  const labels = ['피즈', '이렐리아', '룰루', '제드', '나서스'];
  const [lineData, setLineData] = useState({
    labels,
    datasets: [
      {
        label: '챔피언 별 승률',
        data: [60, 10, 45, 30, 80, 0, 100],
        borderColor: '#5383e8',
        backgroundColor: '#5383e8',
      },
    ],
  });

  const [barData, setBarData] = useState({
    labels,
    datasets: [
      {
        label: '가한 피해량',
        data: [-80, -10, -45, -30, -90, 100],
        borderColor: '#5383e8',
        backgroundColor: '#5383e8',
      },
      {
        label: '받은 피해량',
        data: [60, 20, 45, 30, 50, 100],
        borderColor: '#f12c2c',
        backgroundColor: '#f12c2c',
      },
    ],
  });

  const fetchUserData = (userName: string) => {
    // data fetch
    console.log(userName);
    setIsSearch(true);
  };

  return (
    <section>
      <SearchBar onFetch={fetchUserData} />

      {isSearch && (
        <>
          <DoughnutChart data={doughnutData} ratio={ratio} />
          <LineChart data={lineData} />
          <BarChart data={barData} />
          {summaryInfoMocks.map((summary, i) => (
            <GameSummary key={`game-${i}`} gameSummary={summary} />
          ))}
        </>
      )}
    </section>
  );
}
