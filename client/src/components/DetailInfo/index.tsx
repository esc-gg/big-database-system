import $ from './style.module.scss';
import { useState } from 'react';
import { detailInfoMocks } from '../../mock/detailInfo';
import ChampionImage from '../ChampionImage';
import { BarChart } from '../Graph';

export default function DetailInfo() {
  const blueChampionName = detailInfoMocks[0].map(({ championName }) => championName);
  const redChampionName = detailInfoMocks[0].map(({ championName }) => championName);

  const [barData, setBarData] = useState({
    blueChampionName,
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

  return (
    <section>
      <table>
        <colgroup>
          <col width="60" />
          <col width="150" />
          <col width="150" />
          <col width="400" />
        </colgroup>

        <thead>
          <tr>
            <th className={$.lose} colSpan={2}>
              패배
            </th>
            <th>KDA</th>
            <th>피해량</th>
          </tr>
        </thead>
        <tbody className={$.loseBody}>
          {detailInfoMocks[0].map(
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
                <td>피해량 그래프</td>
              </tr>
            ),
          )}
          {/* <tr>
            <td>
              <BarChart data={barData} />
            </td>
          </tr> */}
        </tbody>
      </table>
    </section>
  );
}
