import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

const url = "https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=";

const SinglePlayer = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [player, setPlayer] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getPlayer() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.players) {
          const {
            strNationality: country,
            strPlayer: name,
            strTeam: club,
            strThumb: image,
            dateBorn: dob,
            strWage: salary,
            strDescriptionEN: desc,
            strSport: sport,
          } = data.players[0];
          const newPlayer = {
            name,
            country,
            club,
            image,
            dob,
            salary,
            sport,
            desc,
          };
          setPlayer(newPlayer);
        } else {
          setPlayer(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getPlayer();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!player) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }
  const { name, image, country, club, dob, salary, desc, sport } = player;

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">sport :</span>
            {sport}
          </p>
          <p>
            <span className="drink-data">country :</span>
            {country}
          </p>
          <p>
            <span className="drink-data">Date Of Birth :</span>
            {dob}
          </p>
          <p>
            <span className="drink-data">club :</span>
            {club ? club : "Not Available"}
          </p>
          <p>
            <span className="drink-data">salary :</span>
            {salary ? salary : "Not Available"}
          </p>
          <p>
            <span className="drink-data">Bio :</span>
            {desc ? desc : "Not Available"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SinglePlayer;
