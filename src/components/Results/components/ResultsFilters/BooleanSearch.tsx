import { SetStateAction, useEffect, useState } from "react";
import {
  QueryBuilder,
  Field,
  RuleGroupType,
  formatQuery,
} from "react-querybuilder";

import "react-querybuilder/dist/query-builder.css";
import "../../../../styles/boolean-search.scss";

interface BooleanSearchProps {
  setSearchQuery: (query: string) => void;
}

const fields: Field[] = [{ name: "paper", label: "paper" }];
const operators = [{ name: "contains", value: "contains", label: "contains" }];

export function BooleanSearch({ setSearchQuery }: BooleanSearchProps) {
  const [query, setQuery] = useState<RuleGroupType | null>(null);

  useEffect(() => {
    if (!!query && query.rules.length) {
      setSearchQuery(
        formatQuery(query, "spel")
          .replaceAll(" matches", "")
          .replaceAll("paper ", "")
          .replaceAll("'", "")
          .replaceAll(" and ", " AND ")
          .replaceAll(" or ", " OR ")
          .replaceAll(" ", "%20")
      );
    } else {
      setSearchQuery("");
    }
  }, [query]);
  return (
    <div className="input-label-group">
      <label>Keyword search</label>
      <QueryBuilder
        fields={fields}
        operators={operators}
        onQueryChange={setQuery}
      />
    </div>
  );
}
