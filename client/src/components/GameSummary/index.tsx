import { useState } from 'react';
import ChampionImage from '../ChampionImage';
import $ from './style.module.scss';
import classnames from 'classnames';
import DetailInfo from '../DetailInfo';
import { detailInfoMocks } from '../../mock/detailInfo';

interface Props {
  gameSummary: {
    gameMode: string;
    gameDuration: number;
    championName: string;
    win: boolean;
    kills: number;
    deaths: number;
    assists: number;
    summonerList: string[];
  };
}

export default function GameSummary({
  gameSummary: { gameMode, win, gameDuration, championName, kills, deaths, assists, summonerList },
}: Props) {
  const [isClicked, setIsClicked] = useState(false);
  const hour = Math.floor(gameDuration / 3600);
  const min = Math.floor(gameDuration / 60);
  const sec = gameDuration % 60;

  return (
    <>
      <li className={classnames($['game-summary'], { [$['is-victory']]: win })}>
        <div className={$['game-info']}>
          <em className={classnames($['game-mode'], { [$['is-victory']]: win })}>{gameMode}</em>
          <em>{win ? '승리' : '패배'}</em>
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
              {summonerList.slice(0, 5).map((summoner, i) => (
                <tr key={summoner}>
                  <td>{summoner}</td>
                  <td>{summonerList[i + 5]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className={classnames({ [$['button-victory']]: win })}
            onClick={() => setIsClicked((isClicked) => !isClicked)}
          >
            v
          </button>
        </div>
      </li>
      {isClicked && (
        <div className={$.detail}>
          <DetailInfo data={detailInfoMocks[0]} summonerList={summonerList.slice(0, 5)} />
          <DetailInfo data={detailInfoMocks[1]} summonerList={summonerList.slice(5, 10)} />
        </div>
      )}
    </>
  );
}
