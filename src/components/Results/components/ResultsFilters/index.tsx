import { SetStateAction } from "react";
import "../../../../styles/results.scss";
import { BooleanSearch } from "./BooleanSearch";

interface ResultsFiltersProps {
  setLimit: (limit: number) => void;
  setSearchQuery: React.Dispatch<SetStateAction<string>>;
}

export function ResultsFilters({
  setLimit,
  setSearchQuery,
}: ResultsFiltersProps) {
  const onLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(parseInt(e.target.value));
  };
  return (
    <div className="column" id="filters-container">
      <div className="input-label-group">
        <label>Results limit</label>
        <input
          id="results-filter-input"
          type="number"
          min={1}
          max={100}
          onChange={onLimitChange}
        />
      </div>
      <BooleanSearch setSearchQuery={setSearchQuery} />
    </div>
  );
}
