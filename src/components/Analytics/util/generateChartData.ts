import type { Paper } from "../../../types";

interface ChartDataItem {
  name: string;
  value: number;
}

export function generateChartData(
  searchQuery: string,
  papers: Paper[]
): ChartDataItem[] {
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
          if (word.toLowerCase() === keyword.toLowerCase()) {
            keywordData.value++;
          }
        });
        paper.abstract.split(" ").forEach((word) => {
          if (word.toLowerCase() === keyword.toLowerCase()) {
            keywordData.value++;
          }
        });
      });
      data.push(keywordData);
    });
  }

  return data;
}
