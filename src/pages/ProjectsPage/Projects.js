import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import classes from "./projects.module.css";
import { BsGithub } from "react-icons/bs";
import project1 from "../../images/projects/Screenshot 2023-09-13 at 21.15.03.png";
import project2 from "../../images/projects/budbudgeting.png";
import project3 from "../../images/projects/little-moments.png";
import SpinnerComp from "../../components/Spinner/Spinner";

function Projects() {
  const [spinner1, setSpinner1] = useState(false);
  const [spinner2, setSpinner2] = useState(false);
  const [spinner3, setSpinner3] = useState(false);

  const clickDemoProjectOne = () => {
    setSpinner1(!spinner1);
    setTimeout(() => {
      window.location.href = "https://lucas-gaviao.github.io/STAR-LORD/";
    }, 200);
  };
  const clickGitHubProjectOne = () => {
    setSpinner1(!spinner1);
    setTimeout(() => {
      window.location.href = "https://github.com/Lucas-Gaviao/STAR-LORD";
    }, 200);
  };
  const clickDemoProjectTwo = () => {
    setSpinner2(!spinner2);
    setTimeout(() => {
      window.location.href = "https://budbudgeting.adaptable.app/";
    }, 200);
  };
  const clickGitHubProjectTwo = () => {
    setSpinner2(!spinner2);
    setTimeout(() => {
      window.location.href = "https://github.com/FitnessNow/FitnessNoow";
    }, 200);
  };
  const clickDemoProjectThree = () => {
    setSpinner3(!spinner3);
    setTimeout(() => {
      window.location.href = "https://little-moments.netlify.app/";
    }, 200);
  };
  const clickGitHubProjectThree = () => {
    setSpinner3(!spinner3);
    setTimeout(() => {
      window.location.href =
        "https://github.com/orgs/littleMomentsApp/repositories";
    }, 200);
  };

  return (
    <section className={classes.ProjectsPage}>
      <h1>PROJECTS</h1>

      <p></p>
      <CardGroup className={classes.myCardGroup}>
        <Card
          className={classes.card}
          bg="dark"
          style={{ width: "18rem", color: "rgba(186, 186, 186, 0.713)" }}
        >
          <Card.Img
            className={classes.imgs}
            variant="top"
            bg="dark"
            src={project1}
          />
          <Card.Body>
            <Card.Title className={classes.headcard}>Star Lord</Card.Title>
            <Card.Text>
              Star-Wars themed game, built using DOM, OOP, HTML, CSS and vanilla
              JavaScrpit.
            </Card.Text>
            {spinner1 ? (
              <SpinnerComp />
            ) : (
              <>
                <Button
                  variant="secondary"
                  onClick={(e) => clickDemoProjectOne()}
                >
                  View Demo
                </Button>
                <Button
                  className={classes.gitHubBtn}
                  variant="light"
                  onClick={(e) => {
                    clickGitHubProjectOne();
                  }}
                >
                  <BsGithub
                    className={classes.githublogo}
                    size="22px"
                    text="black"
                    opacity="100%"
                  />{" "}
                  Github
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
        <Card
          className={classes.card}
          bg="dark"
          text="rgba(186, 186, 186, 0.513)"
          style={{ width: "18rem", color: "rgba(186, 186, 186, 0.713)" }}
        >
          <Card.Img variant="top" bg="dark" src={project2} />
          <Card.Body>
            <Card.Title className={classes.headcard}>Budbudgeting</Card.Title>
            <Card.Text>
              Comprehensive financial management platform created using MERN
              Stack and Bootstrap for styling.
            </Card.Text>
            {spinner2 ? (
              <SpinnerComp />
            ) : (
              <>
                <Button
                  variant="secondary"
                  onClick={(e) => {
                    clickDemoProjectTwo();
                  }}
                >
                  View Demo
                </Button>
                <Button
                  className={classes.gitHubBtn}
                  variant="light"
                  onClick={(e) => {
                    clickGitHubProjectTwo();
                  }}
                >
                  <BsGithub
                    className={classes.githublogo}
                    size="24px"
                    color="black"
                    opacity="100%"
                  />{" "}
                  Github
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
        <Card
          className={classes.card}
          bg="dark"
          text="white"
          style={{ width: "18rem", color: "rgba(186, 186, 186, 0.713)" }}
        >
          <Card.Img variant="top" bg="dark" src={project3} />
          <Card.Body>
            <Card.Title className={classes.headcard}>Little Moments</Card.Title>
            <Card.Text>
              Gift List Website leveraging its own API created with and MERN
              Stack, bootstrap for styling.
            </Card.Text>
            {spinner3 ? (
              <SpinnerComp />
            ) : (
              <>
                <Button
                  variant="secondary"
                  onClick={(e) => {
                    clickDemoProjectThree();
                  }}
                >
                  View Demo
                </Button>
                <Button
                  className={classes.gitHubBtn}
                  variant="light"
                  onClick={(e) => {
                    clickGitHubProjectThree();
                  }}
                >
                  <BsGithub
                    className={classes.githublogo}
                    size="24px"
                    color="black"
                    opacity="100%"
                  />{" "}
                  Github
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
      </CardGroup>
    </section>
  );
}

export default Projects;
