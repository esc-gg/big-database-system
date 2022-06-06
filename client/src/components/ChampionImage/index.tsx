import $ from './style.module.scss';

interface Props {
  source: string;
}

export default function ChampionImage({ source }: Props) {
  return (
    <div className={$['champion-img']}>
      <img src={process.env.PUBLIC_URL + source} alt="champion-image" />
    </div>
  );
}
