import { usePapers } from "../../hooks/usePapers";
import { PaperCard } from "./components/PaperCard";
import { motion } from "framer-motion";
import { ResultsFilters } from "./components/ResultsFilters";
import { useState } from "react";
import { MoonLoader } from "react-spinners";

import "../../styles/results.scss";

export function Results() {
  const [limit, setLimit] = useState(10);

  const { data: papers, isLoading } = usePapers({ limit });

  return (
    <div id="results-container">
      {/* <ResultsFilters setLimit={setLimit} /> */}
      <motion.div
        id="results-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {isLoading ? (
          <MoonLoader color="#0039a6" size={50} />
        ) : (
          <>
            {papers?.map((paper, i) => (
              <PaperCard key={i} paper={paper} />
            ))}
          </>
        )}
      </motion.div>
    </div>
  );
}
