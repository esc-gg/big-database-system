import React, { useState } from 'react';
import { DoughnutChart, LineChart } from '../components/Graph';
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
        borderWidth: 0.8,
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

  const fetchUserData = async (userName: string) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/match/search/${userName}`);
      const data = await response.json();
      console.log(data);
      setIsSearch(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className={$.main}>
      <div className={$.search}>
        <SearchBar onFetch={fetchUserData} />
      </div>

      {isSearch && (
        <>
          <div className={$.content}>
            <DoughnutChart data={doughnutData} ratio={ratio} />
            <LineChart data={lineData} />
          </div>
          {/* {summaryInfoMocks.map((summary, i) => (
            <GameSummary key={`game-${i}`} gameSummary={summary} />
          ))} */}
        </>
      )}
    </section>
  );
}
