import { useMemo } from "react";
import type { Paper } from "../../types";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import "../../styles/analytics.scss";
import { useWindowSize } from "../../hooks/useWindowSize";
import { generateChartData } from "./util/generateChartData";
import barchartIcon from "../../assets/bar-chart.svg";

interface AnalyticsProps {
  papers: Paper[];
  searchQuery: string;
}

export function Analytics({ papers, searchQuery }: AnalyticsProps) {
  const { width } = useWindowSize();

  const chartData = useMemo(
    () => generateChartData(searchQuery, papers),
    [papers, searchQuery]
  );

  const getChartHeight = () => {
    if (width <= 768) {
      return 300;
    } else if (width <= 1280) {
      return 400;
    } else {
      return 500;
    }
  }

  if (!searchQuery) {
    return (
      <div className="analytics-container">
        <div className="column" id='zero-state-container'>
          <img src={barchartIcon} alt="chart icon" id="barchart-icon" />
          <h2>Search for some keywords and their frequencies will appear here!</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="analytics-container">
      <div className="column" style={{ alignItems: "center" }}>
        <h1>Keyword frequency</h1>
        <h3>
          See the frequency of your search keywords in the paper titles and
          abstracts
        </h3>
      </div>
      <ResponsiveContainer
        width="100%"
        minHeight={getChartHeight()}
        id="chart-container"
      >
        <BarChart data={chartData} barSize={100}>
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis dataKey="value" stroke="#fff" />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar dataKey="value" fill="#0039a6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
