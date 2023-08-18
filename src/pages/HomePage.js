import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import ReactTyped from "react-typed";

function HomePage() {
  const navigate = useNavigate();

  const viewWork = () => {
    navigate("/projects");
  };
  return (
    <div className="HomePage">
      <section className="imgDiv">
        <Image
          className="myImg"
          src="https://res.cloudinary.com/dctxow0kh/image/upload/v1688725707/Foto_epxc6w.jpg"
          roundedCircle
        />
        <h2>Full-Stack Developer </h2>
        <h1>
          <ReactTyped
            strings={["Hello World!", "My name is Lucas."]}
            typeSpeed={100}
            backSpeed={100}
            showCursor={true}
            backDelay={1}
            smartBackspace={true}
            cursorChar="|"
            loop
          />
        </h1>
      </section>
    </div>
  );
}

export default HomePage;
