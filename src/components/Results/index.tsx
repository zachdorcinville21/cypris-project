import { usePapers } from "../../hooks/usePapers";
import { PaperCard } from "./components/PaperCard";
import { useState } from "react";
import { MoonLoader } from "react-spinners";

import "../../styles/results.scss";
import { ResultsFilters } from "./components/ResultsFilters";
import { fetchPapers } from "../../util/fetchPapers";
import { Paper } from "../../types";

export function Results() {
  const [limit, setLimit] = useState(10);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [papers, setPapers] = useState<Paper[]>([]);

  // const { data: papers, isLoading } = usePapers({ limit, query: searchQuery });
  console.log("🚀 ~ Results ~ papers:", papers);

  const handleSearch = async () => {
    setIsLoading(true);
    const result = await fetchPapers(limit, searchQuery);
    if (result) {
      setPapers(result);
    }
    setIsLoading(false);
  };

  return (
    <div id="results-container">
      <section className="column" id='search-section' style={{gap: '1rem'}}>
        <ResultsFilters setLimit={setLimit} setSearchQuery={setSearchQuery} />
        <button id='search-btn' onClick={handleSearch}>Search</button>
      </section>
      <section id="results-grid">
        {isLoading ? (
          <MoonLoader color="#0039a6" size={50} />
        ) : (
          <>
            {papers?.map((paper, i) => (
              <PaperCard key={i} paper={paper} />
            ))}
          </>
        )}
      </section>
    </div>
  );
}
