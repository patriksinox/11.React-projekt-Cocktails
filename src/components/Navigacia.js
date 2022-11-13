import { NavLink } from "react-router-dom";

const Navigacia = () => {
  return (
    <div className="bgnav">
      <nav className="navigacia">
        <div className="logo">
          <NavLink to="./">React Cocktail Projekt</NavLink>
        </div>
        <div className="navlinky">
          <NavLink to="./">Domov</NavLink>
          <NavLink to="/about">O Projekte</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navigacia;
