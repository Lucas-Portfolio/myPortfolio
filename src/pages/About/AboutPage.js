import { useState } from "react";
import { Button } from "react-bootstrap";
import myself from "../../images/myself/Foto.jpeg";
import SpinnerComp from "../../components/Spinner/Spinner";
import style from "./about.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import React from "react";

function AboutPage() {
  const [spinner, setSpinner] = useState(false);

  const handleClickLinkedin = () => {
    setSpinner(!spinner);
    setTimeout(
      () => (window.location.href = "https://linkedin.com/in/lucas-gaviao"),
      500
    );
  };

  const handleClickGit = () => {
    setSpinner(!spinner);
    setTimeout(
      () => (window.location.href = "https://github.com/Lucas-Gaviao"),
      500
    );
  };

  return (
    <div className={style.AboutPage}>
      <h1>ABOUT</h1>
      <div className={style.about_container}>
        <img className={style.mypicture} src={myself} alt="mypicture" />
        <p>
          I'm originally from Rio de Janeiro, Brazil, and now based in Dublin,
          as most brazilians I love footbal, beach, video games, and quality
          time with loved ones. I recently decided to change areas and from a
          Team Leader of a team of 13 in a fast-paced call center, I decided to
          change and learn something that I was very curious about, so I
          completed an intensive Web Development bootcamp with Ironhack.
          Proficient in HTML, CSS, JavaScript, Node.js, React.js, MongoDB, and
          Agile methodologies, This exciting chapter marks my transition into
          web development, and I am eager to contribute my with my expertise and
          dedication.
        </p>
        {spinner ? (
          <SpinnerComp />
        ) : (
          <div className={style.button_group}>
            <Button
              className={style.btn_linkedin}
              variant="link"
              onClick={handleClickLinkedin}
            >
              <BsLinkedin
                className={style.githublogo}
                size="38px"
                color="grey"
                opacity="65%"
              />{" "}
            </Button>

            <Button
              className={style.btn_github}
              variant="link"
              onClick={handleClickGit}
            >
              <BsGithub
                className={style.githublogo}
                size="38px"
                color="grey"
                opacity="65%"
              />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutPage;
