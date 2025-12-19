import { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";
import Section from "./Section";
import Card from "./Card";

function Songs() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    axios
      .get("https://qtify-backend.labs.crio.do/songs")
      .then((res) => setSongs(res.data));

    axios
      .get("https://qtify-backend.labs.crio.do/genres")
      .then((res) => setGenres(res.data.data));
  }, []);

  const filteredSongs =
    selected === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selected);

  return (
    <>
      <Tabs
        value={selected}
        onChange={(_, value) => setSelected(value)}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab label="All" value="all" />
        {genres.map((g) => (
          <Tab key={g.key} label={g.label} value={g.key} />
        ))}
      </Tabs>

      <Section
        title="Songs"
        data={filteredSongs}
        collapsible={false}
        renderItem={(song) => (
          <Card
            key={song.id}
            image={song.image}
            title={song.title}
            count={song.likes}
            type="song"
          />
        )}
      />
    </>
  );
}

export default Songs;
