import { useState } from 'react';
import { DoughnutChart } from '../components/Graph';
import SearchBar from '../components/SearchBar';

export default function RecordListPage() {
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [data, setData] = useState([
    { angle: 2, color: '#5383e8' },
    { angle: 3, color: '#f12c2c' },
  ]);

  return (
    <section>
      <SearchBar onSearch={setIsSearch} />
      {isSearch && <DoughnutChart data={data} />}
    </section>
  );
}
