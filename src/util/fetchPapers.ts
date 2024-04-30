import axios from "axios";
import { Paper } from "../types";

export async function fetchPapers(limit = 10): Promise<Paper[] | null> {
  try {
    const result = await axios.get(
      `https://api.core.ac.uk/v3/search/works?limit=${limit}`
    );
    
    const papers = result.data.results.map((result: Record<string, any>) => {
      const thumbnail = result.links.find(
        (link: { type: string; url: string }) => link.type === "thumbnail_l"
      ).url;
      const readerLink = result.links.find(
        (link: { type: string; url: string }) => link.type === "reader"
      ).url;
      return {
        title: result.title,
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
