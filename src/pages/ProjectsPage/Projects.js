import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import classes from "./projects.module.css";
import { BsGithub } from "react-icons/bs";
import project1 from "../../images/projects/Screenshot 2023-09-13 at 21.15.03.png";
function Projects() {
  return (
    <section className={classes.ProjectsPage}>
      <h1>PROJECT</h1>

      <p></p>
      <CardGroup className={classes.myCardGroup}>
        <Card
          className={classes.card}
          bg="dark"
          text="white"
          style={{ width: "18rem" }}
        >
          <Card.Img
            className={classes.imgs}
            variant="top"
            bg="dark"
            src={project1}
          />
          <Card.Body>
            <Card.Title>Star Lord</Card.Title>
            <Card.Text>
              Star-Wars themed game, built with HTML5, CSS and JavaScript.
            </Card.Text>
            <Button variant="primary">View Demo</Button>
            <Button variant="light">
              <BsGithub
                className={classes.githublogo}
                size="24px"
                color="black"
                opacity="100%"
              />{" "}
              Github
            </Button>
          </Card.Body>
        </Card>
        <Card
          className={classes.card}
          bg="dark"
          text="white"
          style={{ width: "18rem" }}
        >
          <Card.Img variant="top" bg="dark" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Star-Wars themed game, built with HTML5, CSS and JavaScript.
            </Card.Text>
            <Button variant="primary">View Demo</Button>
            <Button variant="light">
              <BsGithub
                className={classes.githublogo}
                size="24px"
                color="black"
                opacity="100%"
              />{" "}
              Github
            </Button>
          </Card.Body>
        </Card>
        <Card
          className={classes.card}
          bg="dark"
          text="white"
          style={{ width: "18rem" }}
        >
          <Card.Img variant="top" bg="dark" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">View Demo</Button>
            <Button variant="light">
              <BsGithub
                className={classes.githublogo}
                size="24px"
                color="black"
                opacity="100%"
              />{" "}
              Github
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </section>
  );
}

export default Projects;
