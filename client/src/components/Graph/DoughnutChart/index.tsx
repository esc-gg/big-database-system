import { RadialChart } from "react-vis";

type WinLoseRatio = {
  angle: number;
  color: string;
};

interface Props {
  data: WinLoseRatio[];
}

export default function DoughnutChart({ data }: Props) {
  return (
    <div className="App">
      <header className="App-header"></header>
      <RadialChart
        colorType="literal"
        innerRadius={65}
        radius={55}
        data={data}
        width={160}
        height={160}
        animation={"gentle"}
      />
    </div>
  );
}
