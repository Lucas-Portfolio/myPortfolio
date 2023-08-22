import { useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import github from "../../images/logos/github-logo.png";
import linkedin from "../../images/logos/image-removebg-preview.png";
import myself from "../../images/myself/Foto.jpeg";

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
    <div className="AboutPage">
      <div className="about-container">
        <img className="mypicture" src={myself} alt="mypicture" />
        <p>Some text about myself</p>
        {spinner ? (
          <Spinner animation="border" variant="light" />
        ) : (
          <div className="button-group">
            <Button
              className="btn-contact"
              variant="light"
              onClick={handleClick}
            >
              <img src={linkedin} alt="linkedinLogo" />{" "}
            </Button>

            <Button
              className="btn-github"
              variant="light"
              onClick={handleClickGit}
            >
              <img src={github} alt="githubLogo" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutPage;
