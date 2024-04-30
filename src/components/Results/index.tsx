import { usePapers } from "../../hooks/usePapers";
import { PaperCard } from "./components/PaperCard";
import { useState } from "react";
import { MoonLoader } from "react-spinners";

import "../../styles/results.scss";
import { ResultsFilters } from "./components/ResultsFilters";

export function Results() {
  const [limit, setLimit] = useState(10);

  const { data: papers, isLoading } = usePapers({ limit });

  return (
    <div id="results-container">
      <ResultsFilters setLimit={setLimit} />
      <div id="results-grid">
        {isLoading ? (
          <MoonLoader color="#0039a6" size={50} />
        ) : (
          <>
            {papers?.map((paper, i) => (
              <PaperCard key={i} paper={paper} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
