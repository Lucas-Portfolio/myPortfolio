import { useState } from "react";
import { Button } from "react-bootstrap";
import github from "../../images/logos/github-logo.png";
import linkedin from "../../images/logos/image-removebg-preview.png";
import myself from "../../images/myself/Foto.jpeg";
import SpinnerComp from "../../components/Spinner/Spinner";
import style from "./about.module.css";

function AboutPage() {
  const [spinner, setSpinner] = useState(false);

  const handleClick = () => {
    setSpinner(!spinner);
    setTimeout(
      () => (window.location.href = "https://linkedin.com/in/lucas-gaviao"),
      1000
    );
  };

  const handleClickGit = () => {
    setSpinner(!spinner);
    setTimeout(
      () => (window.location.href = "https://github.com/Lucas-Gaviao"),
      1000
    );
  };

  return (
    <div className={style.AboutPage}>
      <div className={style.about_container}>
        <img className={style.mypicture} src={myself} alt="mypicture" />
        <p>
          I'm Lucas Silva, a dedicated Full-Stack Developer with a Business
          degree from CCT College Dublin. Originally from Rio de Janeiro,
          Brazil, and now based in Dublin, I bring a blend of leadership and
          client relationship skills to my work. My passion lies in web
          development, and I recently completed an intensive Web Development
          bootcamp with Ironhack. Proficient in HTML, CSS, JavaScript, Node.js,
          React.js, MongoDB, and Agile methodologies, I find balance in
          football, video games, and quality time with loved ones. This exciting
          chapter marks my transition into the dynamic world of web development,
          where I'm eager to contribute my expertise and dedication.
        </p>
      </div>
      {spinner ? (
        <SpinnerComp />
      ) : (
        <div className={style.button_group}>
          <Button
            className={style.btn_linkedin}
            variant="light"
            onClick={handleClick}
          >
            <img src={linkedin} alt="linkedinLogo" />{" "}
          </Button>

          <Button
            className={style.btn_github}
            variant="light"
            onClick={handleClickGit}
          >
            <img src={github} alt="githubLogo" />
          </Button>
        </div>
      )}
    </div>
  );
}

export default AboutPage;
