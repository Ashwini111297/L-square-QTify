import { useState } from "react";
import Carousel from "./Carousel";
import styles from "./Section.module.css";

function Section({
  title,
  data = [],        // ✅ DEFAULT VALUE (THIS FIXES THE CRASH)
  renderItem,
  collapsible = true
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>

        {collapsible && (
          <button
            className={styles.toggle}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? "Show All" : "Collapse"}
          </button>
        )}
      </div>

      {!collapsed ? (
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
