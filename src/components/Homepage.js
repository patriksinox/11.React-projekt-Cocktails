import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const Homepage = () => {
  const [search, setSearch] = useState("vodka");
  const { fetchDat, drinky, error, loading } = useFetch(search);

  //Odoslanie formy
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetchDat();
  }, [search]);

  return (
    <>
      <form onSubmit={handleSubmit} className="forma">
        <label htmlFor="">Vyhľadaj svoj obľúbený Cocktail</label>
        <input
          className="form-control"
          type="text"
          placeholder="Drink"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <section className="container row">
        {error && (
          <h1 className="text-center mt-5 error">
            Nenašiel som žiadny drink podľa vášho hľadania.
          </h1>
        )}
        {loading && (
          <div className="spinner-border mt-5 text-center" role="status"></div>
        )}
        {drinky.map((drink) => {
          const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } =
            drink;

          return (
            <article key={idDrink} className="col-sm-3">
              <img src={strDrinkThumb} alt={strDrink} className="img-fluid" />
              <div className="obsah">
                <h3>{strDrink}</h3>
                <p>{strAlcoholic}</p>
                <p>{strGlass}</p>
                <Link to={`/Drink/${strDrink}`}>
                  <button className="btn btn-outline-primary">
                    Viac informácií
                  </button>
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Homepage;
