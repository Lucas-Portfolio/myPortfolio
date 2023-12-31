import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SpinnerComp from "../../components/Spinner/Spinner";
import style from "./contact.module.css";
import phone from "../../images/logos/telephone.png";
import mail from "../../images/logos/mail.png";
import placeholder from "../../images/logos/placeholder.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import React from "react";

function ContactPage() {
  const [spinner, setSpinner] = useState(false);
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();

  const handleChangeBody = (e) => {
    setBody(e.target.value);
  };

  const handleChangeSubject = (e) => {
    setSubject(e.target.value);
    console.log(subject);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleClickLinkedin = () => {
    setSpinner(!spinner);
    setTimeout(
      () => (window.location.href = "https://linkedin.com/in/lucas-gaviao"),
      200
    );
  };

  const handleClickGit = () => {
    setTimeout(
      () => (window.location.href = "https://github.com/Lucas-Gaviao"),
      200
    );
  };

  const handleSubmit = () => {
    setSpinner(!spinner);
    setTimeout(() => {
      window.open(
        `mailto:gaviao.lucas@gmail.com?subject=${name} - ${subject}&body=${body}`
      );
      navigate("/");
    }, 1000);
    setBody("");
  };

  return (
    <div className={style.ContactPage}>
      <section className={style.contact_head}>
        <h1>CONTACT</h1>
      </section>
      <section className={style.contact_title}>
        {" "}
        <span>
          I am looking for a Full-Time position, but I am also interested in
          freelancing and collabing with other devs. Let's create something
          amazing together!
        </span>
      </section>
      <div className={style.sub_title}>
        <span>
          <img src={phone} alt="phonelogo" />
          +353 83 3795009
        </span>
        <span>
          <img src={mail} alt="maillogo" />
          gaviao.lucas@gmail.com
        </span>
        <span>
          <img src={placeholder} alt="locationlogo" />
          Dublin, Ireland
        </span>
      </div>

      <Form className={style.Form}>
        <Form.Group className="mb-2">
          <Form.Control
            className={style.input}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              handleChangeName(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            className={style.input}
            type="email"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            className={style.input}
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => {
              handleChangeSubject(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            className={style.input}
            as="textarea"
            rows={5}
            value={body}
            placeholder="Message"
            onChange={(e) => {
              handleChangeBody(e);
            }}
          />
        </Form.Group>
        {spinner ? (
          <SpinnerComp />
        ) : (
          <Button
            className={style.btn_form}
            variant="secondary"
            onClick={(e) => handleSubmit()}
          >
            {" "}
            Submit{" "}
          </Button>
        )}
      </Form>

      <section className={style.btn_group}>
        <Button
          className={style.btn_linkedin}
          variant="link"
          onClick={() => handleClickLinkedin()}
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
          onClick={(e) => handleClickGit()}
        >
          <BsGithub
            className={style.githublogo}
            size="38px"
            color="grey"
            opacity="65%"
          />
        </Button>
      </section>
    </div>
  );
}

export default ContactPage;
