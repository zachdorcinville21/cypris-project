import { useQuery } from "@tanstack/react-query";
import { fetchPapers } from "../util/fetchPapers";

interface UsePapersOptions {
  limit?: number;
  query?: string;
}

export function usePapers(options?: UsePapersOptions) {
  return useQuery({
    queryKey: ["papers", options],
    queryFn: () => fetchPapers(options?.limit, options?.query),
  });
}
