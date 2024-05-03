import axios from "axios";
import { Paper } from "../types";

export async function fetchPapers(
  limit = 10,
  query?: string
): Promise<Paper[] | null> {
  try {
    let url = `https://api.core.ac.uk/v3/search/works?limit=${limit}`;
    if (query) {
      url += `&q=${query};`;
    }
    console.log("url, ", url);
    const result = await axios.get(url);
    console.log("result", result.data);

    const papers = result.data.results.map((result: Record<string, any>) => {
      const thumbnail = result.links.find(
        (link: { type: string; url: string }) => link.type === "thumbnail_l"
      )?.url;
      const readerLink = result.links.find(
        (link: { type: string; url: string }) => link.type === "reader"
      )?.url;
      return {
        title: result.title,
        abstract: result.abstract ?? '',
        authors: result.authors,
        publishedDate: result.publishedDate,
        thumbnail,
        readerLink,
      };
    });

    return papers;
  } catch (e) {
    console.error(e);
    return null;
  }
}
