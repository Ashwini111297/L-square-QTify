import { useEffect, useState } from "react";
import axios from "axios";
import Section from "./Section";
import Card from "./Card";

function Albums() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://qtify-backend.labs.crio.do/albums/top")
      .then((res) => setTopAlbums(res.data));

    axios
      .get("https://qtify-backend.labs.crio.do/albums/new")
      .then((res) => setNewAlbums(res.data));
  }, []);

  return (
    <>
      <Section
        title="Top Albums"
        data={topAlbums}
        renderItem={(album) => (
          <Card
            key={album.id}
            image={album.image}
            title={album.title}
            count={album.follows}
            type="album"
          />
        )}
      />

      <Section
        title="New Albums"
        data={newAlbums}
        renderItem={(album) => (
          <Card
            key={album.id}
            image={album.image}
            title={album.title}
            count={album.follows}
            type="album"
          />
        )}
      />
    </>
  );
}

export default Albums;
