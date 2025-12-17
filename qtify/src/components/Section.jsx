import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import styles from "../components/Section.module.css";

function Section() {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend.labs.crio.do/albums/top"
        );
        setAlbums(response.data);
      } catch (err) {
        setError("Failed to fetch albums");
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3>Top Albums</h3>
        <button onClick={() => setCollapsed((prev) => !prev)}>
          {collapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      {loading && <p>Loading albums...</p>}
      {error && <p>{error}</p>}

      {!collapsed && !loading && !error && (
        <div className={styles.grid}>
          {albums.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Section;
