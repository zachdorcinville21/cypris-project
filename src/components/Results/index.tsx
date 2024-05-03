import { PaperCard } from "./components/PaperCard";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

import "../../styles/results.scss";
import { ResultsFilters } from "./components/ResultsFilters";
import { fetchPapers } from "../../util/fetchPapers";
import { usePapersStore } from "../../stores/usePapersStore";
import { useKeywordStore } from "../../stores/useKeywordStore";

export function Results() {
  const [limit, setLimit] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const { papers, setPapers } = usePapersStore();
  const { searchQuery, setSearchQuery } = useKeywordStore();

  const handleSearch = async () => {
    setIsLoading(true);
    const result = await fetchPapers(limit, searchQuery);
    if (result) {
      setPapers(result);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div id="results-container">
      <section className="column" id="search-section" style={{ gap: "1rem" }}>
        <ResultsFilters setLimit={setLimit} setSearchQuery={setSearchQuery} />
        <button id="search-btn" onClick={handleSearch}>
          Search
        </button>
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
