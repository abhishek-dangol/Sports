import React, { useState, useContext, useEffect, createContext } from "react";
import { useCallback } from "react";

const url = "https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("s");
  const [players, setPlayers] = useState([]);

  const fetchPlayers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data);
      const { player } = data;
      if (player) {
        const newPlayers = player.map((item) => {
          const {
            idPlayer,
            strPlayer,
            strThumb,
            strTeam,
            strSport,
            strPosition,
            dateBorn,
            strWage,
            strDescriptionEN,
          } = item;
          return {
            id: idPlayer,
            name: strPlayer,
            image: strThumb,
            club: strTeam,
            sport: strSport,
            pos: strPosition,
            dob: dateBorn,
            salary: strWage,
            about: strDescriptionEN,
          };
        });
        setPlayers(newPlayers);
      } else {
        setPlayers([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchPlayers();
  }, [searchTerm, fetchPlayers]);

  return (
    <AppContext.Provider value={{ loading, players, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
