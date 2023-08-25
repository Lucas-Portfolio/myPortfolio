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
      <section className={style.contact_head}>
        <h1>CONTACT</h1>
      </section>
      <section className={style.contact_title}>
        {" "}
        <span>
          I am looking for a Full-Time position, but I am also interested in
          freelancing and collabing with other devs. <br />
          Let's create something amazing together!
        </span>
      </section>

      <Form className={style.Form}>
        <Form.Group className="mb-3">
          <Form.Control
            className={style.input}
            type="text"
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            className={style.input}
            type="email"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            className={style.input}
            type="text"
            placeholder="Subject"
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
              handleChange(e);
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
