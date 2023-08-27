import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SpinnerComp from "../../components/Spinner/Spinner";
import style from "./contact.module.css";

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

  const handleSend = () => {
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
          <img src="" alt="" />
          +353 83 3795009
        </span>
        <span>
          <img src="" alt="" />
          gaviao.lucas@gmail.com
        </span>
        <span>
          <img src="" alt="" />
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
            onClick={handleSend}
          >
            {" "}
            Send{" "}
          </Button>
        )}
      </Form>
    </div>
  );
}

export default ContactPage;
