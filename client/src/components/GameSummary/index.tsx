import React from 'react';
import ChampionImage from '../ChampionImage';
import $ from './style.module.scss';

interface Props {
  gameMode: string;
  isVictory: boolean;
  gameDuration: number;
  championName: string;
  kills: number;
  deaths: number;
  assists: number;
}

export default function GameSummary({
  gameMode,
  isVictory,
  gameDuration,
  championName,
  kills,
  deaths,
  assists,
}: Props) {
  return (
    <li className={$['game-summary']}>
      <div className={$['game-info']}>
        <em>{gameMode}</em>
        <em>{isVictory}</em>
        <span>{gameDuration}</span>
      </div>
      <div className={$['basic-info']}>
        <ChampionImage source={`assets/championImage/${championName}.jpg`} />
        <span>
          {kills}/{deaths}/{assists}
        </span>
      </div>
      <table>
        <th>아군</th>
        <th>적군</th>
        {
          <tr>
            <td>아군 이름</td>
            <td>적군 이름</td>
          </tr>
        }
      </table>
    </li>
  );
}
