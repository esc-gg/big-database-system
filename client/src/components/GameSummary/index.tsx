import { useState } from 'react';
import ChampionImage from '../ChampionImage';
import $ from './style.module.scss';
import classnames from 'classnames';
import DetailInfo from '../DetailInfo';
import { detailInfoMocks } from '../../mock/detailInfo';

interface Props {
  gameSummary: {
    gameMode: string;
    isVictory: boolean;
    gameDuration: number;
    championName: string;
    kills: number;
    deaths: number;
    assists: number;
    victoryMember: string[];
    loseMember: string[];
  };
}

export default function GameSummary({
  gameSummary: { gameMode, isVictory, gameDuration, championName, kills, deaths, assists, victoryMember, loseMember },
}: Props) {
  const [isClicked, setIsClicked] = useState(false);
  const hour = Math.floor(gameDuration / 3600);
  const min = Math.floor(gameDuration / 60);
  const sec = gameDuration % 60;

  return (
    <>
      <li className={classnames($['game-summary'], { [$['is-victory']]: isVictory })}>
        <div className={$['game-info']}>
          <em className={classnames($['game-mode'], { [$['is-victory']]: isVictory })}>{gameMode}</em>
          <em>{isVictory ? '승리' : '패배'}</em>
          <span>
            {hour !== 0 && `${hour}시간`} {min}분 {sec}초
          </span>
        </div>

        <div className={$['basic-info']}>
          <ChampionImage source={championName} />
          <div className={$['score']}>
            <div>
              <span>{kills} / </span>
              <span>{deaths}</span>
              <span> / {assists}</span>
            </div>
            <span>{((kills + assists) / deaths).toFixed(2)}:1 평점</span>
          </div>
        </div>

        <div className={$['more']}>
          <table>
            <colgroup>
              <col width="100" />
              <col width="100" />
            </colgroup>
            <tbody>
              <th>아군</th>
              <th>적군</th>
              {victoryMember.map((victory, i) => (
                <tr key={victory}>
                  <td>{victory}</td>
                  <td>{loseMember[i]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className={classnames({ [$['button-victory']]: isVictory })}
            onClick={() => setIsClicked((isClicked) => !isClicked)}
          >
            v
          </button>
        </div>
      </li>
      {isClicked && (
        <div className={$.detail}>
          <DetailInfo data={detailInfoMocks[0]} />
          <DetailInfo data={detailInfoMocks[1]} />
        </div>
      )}
    </>
  );
}
