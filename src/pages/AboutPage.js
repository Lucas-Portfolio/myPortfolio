import { useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";

function AboutPage() {
  const [spinner, setSpinner] = useState(false);

  const handleClick = () => {
    setSpinner(!spinner);
    setTimeout(
      () => (window.location.href = "https://linkedin.com/in/lucas-gaviao"),
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
            <Button
              className="btn-contact"
              variant="light"
              onClick={handleClick}
            >
              <img
                src="https://res.cloudinary.com/dctxow0kh/image/upload/v1692363352/image-removebg-preview_gvgres.png"
                alt="linkedinLogo"
              />{" "}
              LinkedIn
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutPage;
