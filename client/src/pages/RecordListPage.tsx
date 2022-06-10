import React, { useState } from 'react';
import { DoughnutChart, LineChart } from '../components/Graph';
import SearchBar from '../components/SearchBar';
import GameSummary from '../components/GameSummary';
import $ from './style.module.scss';
import { fetchTotal } from '../api/fetch';

export default function RecordListPage() {
  const [fetchData, setFetchData] = useState([]);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalWinLost, setTotalWinLost] = useState([0, 0]);
  const doughnutData = {
    labels: ['WIN', 'LOSE'],
    datasets: [
      {
        data: totalWinLost,
        backgroundColor: ['#5383e8', '#f12c2c'],
        borderWidth: 0.8,
      },
    ],
  };
  const winlose = doughnutData.datasets[0].data;
  const ratio = Math.round((winlose[0] / winlose.reduce((acc, curr) => acc + curr, 0)) * 100);

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
    setIsSearch(false);
    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}api/match/search/${userName}`);
      const data = await response.json();
      setFetchData(data);

      await fetchTotal(userName)
        .then((data) => {
          const { win, lost } = data;
          const winlost = [win, lost];
          setTotalWinLost(winlost);
        })
        .catch((err) => console.log(err));
    } catch (e) {
      setFetchData([]);
      console.log(e);
    } finally {
      setIsSearch(true);
      setIsLoading(false);
    }
  };

  return (
    <section className={$.main}>
      <div className={$.search}>
        <SearchBar onFetch={fetchUserData} />
      </div>

      {isLoading && (
        <div className={$.loading}>
          <div className={$.spinner}></div>
        </div>
      )}

      {isSearch && (
        <>
          {fetchData.length ? (
            <>
              <div className={$.content}>
                <DoughnutChart data={doughnutData} totalWinLost={totalWinLost} ratio={ratio} />
                <LineChart data={lineData} />
              </div>
              {fetchData.map((summary, i) => (
                <GameSummary key={`game-${i}`} gameSummary={summary} />
              ))}
            </>
          ) : (
            <span className={$['no-result']}>검색 결과가 없습니다.</span>
          )}
        </>
      )}
    </section>
  );
}
