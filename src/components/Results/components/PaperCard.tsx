import { Paper } from "../../../types";
import { format } from "date-fns";

import "../../../styles/paper-card.scss";

interface PaperCardProps {
  paper: Paper;
}

export function PaperCard({ paper }: PaperCardProps) {
  const onPaperClick = () => {
    window.open(paper.readerLink, "_blank");
  };
  return (
    <div className="paper-card" onClick={onPaperClick}>
      <div className="paper-card-body">
        <div className="column" style={{ alignItems: "start", gap: "0.5rem" }}>
          <img
            className="paper-card-thumbnail"
            src={paper.thumbnail}
            alt="Paper thumbnail"
          />
          <div>
            <h3 className="paper-card-title">{paper.title}</h3>
            <p className="paper-card-author">
              {`${paper.authors[0].name}${
                paper.authors.length > 1 ? " and others" : ""
              }`}
            </p>
          </div>
        </div>
        <p className="paper-card-date">
          {format(new Date(paper.publishedDate), "MMM d, yyyy")}
        </p>
      </div>
    </div>
  );
}
