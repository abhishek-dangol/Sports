import React from "react";
import PlayerList from "../components/PlayerList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <PlayerList />
    </main>
  );
};

export default Home;
