import axios from "axios";
import type { Paper } from "../types";

export async function fetchPapers(
  limit = 10,
  query?: string
): Promise<Paper[] | null> {
  try {
    let url = `https://api.core.ac.uk/v3/search/works?limit=${limit}`;
    if (query) {
      url += `&q=${query};`;
    }
    const result = await axios.get(url);

    const papers = result.data.results.map(
      (result: Record<string, any>): Paper => {
        const thumbnail = result.links.find(
          (link: { type: string; url: string }) =>
            link.type === "thumbnail_l" || link.type === "thumbnail_m"
        )?.url;
        const readerLink = result.links.find(
          (link: { type: string; url: string }) =>
            link.type === "reader" || link.type === "display"
        )?.url;
        return {
          title: result.title,
          abstract: result.abstract ?? "",
          authors: result.authors,
          publishedDate: result.publishedDate,
          thumbnail,
          readerLink,
          updatedDate: result.updatedDate,
        };
      }
    );

    return papers;
  } catch (e) {
    console.error(e);
    return null;
  }
}
