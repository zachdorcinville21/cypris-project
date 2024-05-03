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

interface AnalyticsProps {
  papers: Paper[];
  searchQuery: string;
}

export function Analytics({ papers, searchQuery }: AnalyticsProps) {
  const { width } = useWindowSize();

  const chartData = useMemo(() => {
    const data: { name: string; value: number }[] = [];

    if (!!searchQuery) {
      const keywords = searchQuery
        .replaceAll("%20", "")
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll("AND", " ")
        .replaceAll("OR", " ")
        .split(" ");

      keywords.forEach((keyword) => {
        const keywordData: { name: string; value: number } = {
          name: keyword,
          value: 0,
        };
        papers.forEach((paper) => {
          paper.title.split(" ").forEach((word) => {
            if (word === keyword) {
              keywordData.value++;
            }
          });
          paper.abstract.split(" ").forEach((word) => {
            if (word === keyword) {
              keywordData.value++;
            }
          });
        });
        data.push(keywordData);
      });
    }

    return data;
  }, [papers, searchQuery]);

  if (!searchQuery) {
    return (
      <div className="analytics-container">
        <h2>Nothing to show</h2>
      </div>
    );
  }

  return (
    <div className="analytics-container">
      <div className="column" style={{ alignItems: "center" }}>
        <h1>Search keyword frequency</h1>
        <h3>
          See the frequency of your search keywords in the paper titles and
          abstracts
        </h3>
      </div>
      <ResponsiveContainer
        width="100%"
        minHeight={width < 768 ? 300 : 600}
        id="chart-container"
      >
        <BarChart data={chartData} barSize={100} margin={{ right: 100 }}>
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis dataKey="value" stroke="#fff" />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar dataKey="value" fill="#0039a6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
