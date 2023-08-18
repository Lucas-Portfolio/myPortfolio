import { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";

function ContactPage() {
  const [spinner, setSpinner] = useState(false);
  const [intervalId, setIntervalId] = useState();
  const [body, setBody] = useState();

  const handleSend = () => {
    setSpinner(!spinner);

    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      setSpinner(!spinner);
      return;
    }
    const newIntervalId = setInterval(
      () =>
        window.open(
          `mailto:gaviao.lucas@gmail.com?subject=myWebsite&body=${body}`
        ),
      1000
    );
    setIntervalId(newIntervalId);
  };

  const handleChange = (e) => {
    setBody(e.target.body);
  };

  return (
    <div className="ContactPage">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        {spinner ? (
          <Spinner animation="border" variant="light" />
        ) : (
          <Button variant="warning" onClick={handleSend}>
            {" "}
            Send{" "}
          </Button>
        )}
      </Form>
    </div>
  );
}

export default ContactPage;
