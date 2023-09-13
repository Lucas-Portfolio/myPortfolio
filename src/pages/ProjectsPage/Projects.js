import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import classes from "./projects.module.css";
import { BsGithub } from "react-icons/bs";
import project1 from "../../images/projects/Screenshot 2023-09-13 at 21.15.03.png";
import project2 from "../../images/projects/budbudgeting.png";
import project3 from "../../images/projects/little-moments.png";
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
            <Button variant="secondary">View Demo</Button>
            <Button className={classes.gitHubBtn} variant="light">
              <BsGithub
                className={classes.githublogo}
                size="22px"
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
          <Card.Img variant="top" bg="dark" src={project2} />
          <Card.Body>
            <Card.Title>Budbudgeting</Card.Title>
            <Card.Text>
              Finance Budgeting Website build in two parts(back-end and
              front-end) using MERN Stack.
            </Card.Text>
            <Button variant="secondary">View Demo</Button>
            <Button className={classes.gitHubBtn} variant="light">
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
          <Card.Img variant="top" bg="dark" src={project3} />
          <Card.Body>
            <Card.Title>Little Moments</Card.Title>
            <Card.Text>
              Gift List Website built with an dedicated REST API and MERN Stack.
            </Card.Text>
            <Button variant="secondary">View Demo</Button>
            <Button className={classes.gitHubBtn} variant="light">
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
