import $ from './style.module.scss';
import { useState } from 'react';
import ChampionImage from '../ChampionImage';
import { BarChart } from '../Graph';

interface Props {
  data: {
    summonerName: string;
    championName: string;
    kills: number;
    deaths: number;
    assists: number;
    totalDamageDealtToChampions: number;
    totalDamageTaken: number;
    win: boolean;
  }[];
}

export default function DetailInfo({ data }: Props) {
  const winlose = data[0].win;
  const labels = data.map(({ summonerName }) => summonerName);
  const totalDamageDealtToChampions = data.map(({ totalDamageDealtToChampions }) => totalDamageDealtToChampions);
  const totalDamageTaken = data.map(({ totalDamageTaken }) => totalDamageTaken);
  const [barData, setBarData] = useState({
    labels,
    datasets: [
      {
        label: '가한 피해량',
        data: totalDamageDealtToChampions,
        borderColor: '#E84057',
        backgroundColor: '#E84057',
      },
      {
        label: '받은 피해량',
        data: totalDamageTaken,
        borderColor: '#9AA4AF',
        backgroundColor: '#9AA4AF',
      },
    ],
  });

  return (
    <section className={$.detail}>
      <table>
        <colgroup>
          <col width="50" />
          <col width="200" />
          <col width="150" />
        </colgroup>

        <thead>
          <tr>
            <th className={winlose ? $.win : $.lose} colSpan={2}>
              {winlose ? '승리' : '패배'}
            </th>
            <th>KDA</th>
          </tr>
        </thead>
        <tbody className={winlose ? $.winBody : $.loseBody}>
          {data.map(
            (
              { summonerName, championName, kills, deaths, assists, totalDamageDealtToChampions, totalDamageTaken },
              index,
            ) => (
              <tr key={summonerName + index}>
                <td className={$.main}>
                  <ChampionImage source={championName} />
                </td>
                <td>
                  <strong>{summonerName}</strong>
                </td>
                <td>
                  {kills}/{deaths}/{assists}
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
      <BarChart data={barData} />
    </section>
  );
}
