import { Paper } from "../../../types";
import { format } from "date-fns";
import { motion } from "framer-motion";
import thumbnailPlaceholder from "../../../assets/reading.jpg";

import "../../../styles/paper-card.scss";

interface PaperCardProps {
  paper: Paper;
}

export function PaperCard({ paper }: PaperCardProps) {
  const onPaperClick = () => {
    window.open(paper.readerLink, "_blank");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="paper-card"
      onClick={onPaperClick}
    >
      <div className="paper-card-body">
        <div className="column" style={{ alignItems: "start", gap: "0.5rem" }}>
          {paper.thumbnail ? (
            <img
              className="paper-card-thumbnail"
              src={paper.thumbnail}
              alt="Paper thumbnail"
            />
          ) : (
            <img
              className="paper-card-thumbnail-placeholder"
              src={thumbnailPlaceholder}
              alt="Paper thumbnail"
            />
          )}
          <div>
            <h3 className="paper-card-title">{paper.title}</h3>
            <p className="paper-card-author">
              {!paper.authors.length
                ? "No author available"
                : `${paper.authors[0]?.name}${
                    paper.authors.length > 1 ? " and others" : ""
                  }`}
            </p>
          </div>
        </div>
        <div className="paper-card-dates">
          <p className="paper-card-date">
            {!!paper.publishedDate
              ? format(new Date(paper?.publishedDate), "MMM d, yyyy")
              : "No publication date available"}
          </p>
          <p className="updated-date">
            {`Updated: ${format(new Date(paper.updatedDate), "MMM d, yyyy")}`}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
