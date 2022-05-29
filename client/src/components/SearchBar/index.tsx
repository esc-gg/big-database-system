interface Props {
  onSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchBar({ onSearch }: Props) {
  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // data fetch
      onSearch(true);
    }
  };
  return (
    <div>
      <input type="text" placeholder="소환사명" onKeyPress={onKeyPress} />
    </div>
  );
}
