import "../../../../styles/results.scss";

interface ResultsFiltersProps {
  setLimit: (limit: number) => void;
}

export function ResultsFilters({ setLimit }: ResultsFiltersProps) {
  const onLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(parseInt(e.target.value));
  };
  return (
    <div className="column" style={{ maxWidth: "200px" }}>
      <label>Results limit</label>
      <input
        id="results-filter-input"
        type="number"
        min={1}
        max={100}
        onChange={onLimitChange}
      />
    </div>
  );
}
