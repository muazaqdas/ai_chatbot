import { useState } from "react";

const TruncatedText = ({ text, limit }) => {
  const [showAll, setShowAll] = useState(false);

  if (text.length <= limit) {
    return <p>{text}</p>;
  }

  const truncatedText = showAll ? text : `${text.slice(0, limit)}...`;

  return (
    <p>
      {truncatedText}
      {showAll ? (
        <span className="text-success cursor-pointer" onClick={() => setShowAll(false)}> less</span>
      ) : (
        <span className="text-success cursor-pointer" onClick={() => setShowAll(true)}>...more</span>
      )}
    </p>
  );
};

export default TruncatedText;
