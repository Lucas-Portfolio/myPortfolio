import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SpinnerComp from "../../components/Spinner/Spinner";
import style from "./contact.module.css";

function ContactPage() {
  const [spinner, setSpinner] = useState(false);
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBody(e.target.value);
    console.log(body);
  };
  const handleSend = () => {
    setSpinner(!spinner);
    setTimeout(() => {
      window.open(
        `mailto:gaviao.lucas@gmail.com?subject=myWebsite&body=${body}`
      );
      navigate("/");
    }, 1000);
    setBody("");
  };

  return (
    <div className={style.ContactPage}>
      <section className={style.contact_title}>
        {" "}
        <h2> Contact Me</h2>
        <span>
          I am currently looking for a Front-End Dev position or any freelance,
          but I am very happy to collaborate with other developers to create
          amazing projects.
        </span>
      </section>

      <Form className={style.Form}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={body}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </Form.Group>
        {spinner ? (
          <SpinnerComp />
        ) : (
          <Button
            className={style.btn_form}
            variant="warning"
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
