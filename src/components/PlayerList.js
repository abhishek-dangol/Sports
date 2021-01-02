import React from "react";
import Player from "./Player";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const PlayerList = () => {
  const { players, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (players.length < 1) {
    return (
      <h2 className="section-title">No Players Matched Your Search Criteria</h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">Players</h2>
      <div className="cocktails-center">
        {players.map((item) => {
          return <Player key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default PlayerList;
