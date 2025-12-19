import { useState } from "react";
import Carousel from "./Carousel";
import styles from "./Section.module.css";

function Section({
  title,
  data = [],
  renderItem,
  collapsible = true
}) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>

        {collapsible && (
          <button
            className={styles.toggle}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      {/* ✅ CRIO EXPECTATION */}
      {showAll || !collapsible ? (
        <div className={styles.grid}>
          {data.map(renderItem)}
        </div>
      ) : (
        <Carousel>
          {data.map(renderItem)}
        </Carousel>
      )}
    </div>
  );
}

export default Section;
