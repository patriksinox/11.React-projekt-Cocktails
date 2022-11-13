import React from "react";
import { AiFillGithub, AiFillFacebook, AiFillMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center abouth1">O projekte React Cocktail</h1>
        <p className="about-text">
          Tento projekt som vytvoril podľa predlohy učiteľa{" "}
          <a href="https://www.johnsmilga.com/" target="_blank">
            Johna Smilgu z Udemy
          </a>{" "}
          , pozrel som si jeho{" "}
          <a
            href="https://react-projects-15-cocktails.netlify.app/"
            target="_blank"
          >
            funkcionalitu
          </a>{" "}
          a vytvoril som celý projekt so svojím kódom a dizajnom. V projekte som
          použil Bootstrap, React, React Router a Axios.
        </p>
        <h2 className="text-center">Kontakt na mňa:</h2>
        <div className="ikonky">
          <a href="https://www.facebook.com/patrik.subjak.75/" target="_blank">
            <AiFillFacebook />
          </a>
          <a
            href="https://github.com/patriksinox"
            target="_blank"
            className="git-ico"
          >
            <AiFillGithub />
          </a>
          <a
            href="mailto:psubjak@gmail.com"
            target="_blank"
            className="mail-ico"
          >
            <AiFillMail />
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
