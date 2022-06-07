import $ from './style.module.scss';

interface Props {
  onFetch: (userName: string) => void;
}

export default function SearchBar({ onFetch }: Props) {
  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // data fetch
      onFetch(e.currentTarget.value);
    }
  };

  return (
    <div className={$.search}>
      <input type="text" placeholder="소환사명" onKeyPress={onKeyPress} autoFocus />
      <img src="https://s-lol-web.op.gg/images/icon/icon-gg.svg?v=1654157118674" alt="search" />
    </div>
  );
}
