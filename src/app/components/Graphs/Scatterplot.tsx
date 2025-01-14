// num vs num
import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function Scatterplot({
  table,
  col1,
  col2,
}: {
  table: any;
  col1: string;
  col2: string;
}) {
  const data = {
    datasets: [
      {
        label: `${col1} vs ${col2}`,
        data: table.map((item) => ({
          x: parseFloat(item[col1]),
          y: parseFloat(item[col2]),
        })),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  return <Scatter options={options} data={data} />;
}
