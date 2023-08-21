import { useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import github from "../images/github-logo.png";

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
      <Card style={{ width: "19rem", background: "orange" }}>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/dctxow0kh/image/upload/v1688725707/Foto_epxc6w.jpg"
        />
        <Card.Body>
          <Card.Title>Lucas Silva</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          {spinner ? (
            <Spinner animation="border" variant="light" />
          ) : (
            <div className="button-group">
              <Button
                className="btn-contact"
                variant="light"
                onClick={handleClick}
              >
                <img
                  src="https://res.cloudinary.com/dctxow0kh/image/upload/v1692363352/image-removebg-preview_gvgres.png"
                  alt="linkedinLogo"
                />{" "}
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
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutPage;
