import { Paper } from "../../../types";
import { format } from "date-fns";
import { motion } from "framer-motion";

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
          <img
            className="paper-card-thumbnail"
            src={paper.thumbnail}
            alt="Paper thumbnail"
          />
          <div>
            <h3 className="paper-card-title">{paper.title}</h3>
            <p className="paper-card-author">
              {`${paper.authors[0]?.name}${
                paper.authors.length > 1 ? " and others" : ""
              }`}
            </p>
          </div>
        </div>
        <p className="paper-card-date">
          {paper.publishedDate
            ? format(new Date(paper?.publishedDate), "MMM d, yyyy")
            : null}
        </p>
      </div>
    </motion.div>
  );
}
