import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Drink = () => {
  const { strDrink } = useParams();
  const { drink } = useFetch(strDrink);

  const {
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strDrinkThumb,
  } = drink;

  return (
    <>
      <div className="container">
        <h1 className="text-center ">{strDrink}</h1>
        <div className="produkt row">
          <div className="fotka col-sm-6">
            <img src={strDrinkThumb} alt={strDrink} className="img-fluid" />
          </div>
          <div className="produkt-popis col-sm-6">
            <p>
              <span className="policko">Meno:</span> {strDrink}{" "}
            </p>
            <p>
              <span className="policko">Kategória:</span> {strCategory}{" "}
            </p>
            <p>
              <span className="policko">Druh:</span> {strAlcoholic}{" "}
            </p>
            <p>
              <span className="policko">Pohár:</span> {strGlass}{" "}
            </p>
            <p>
              <span className="policko">Inštrukcie:</span> {strInstructions}{" "}
            </p>
            <p>
              <span className="policko">Ingrediencie:</span> {strIngredient1}{" "}
              {strIngredient2} {strIngredient3} {strIngredient4}{" "}
              {strIngredient5}{" "}
            </p>
          </div>
        </div>
        <div className="naspat">
          <Link to="/" className="btn btn-primary naspat-btn">
            Naspäť na výber drinkov
          </Link>
        </div>
      </div>
    </>
  );
};

export default Drink;
