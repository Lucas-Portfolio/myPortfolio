import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const viewWork = () => {
    navigate("/work");
  };
  return (
    <div className="HomePage">
      <div className="textDiv">
        <h1>Hello, I am Lucas Silva</h1>
        <h2>I am a Full-Stack Developer</h2>
        <button variant="warning" onClick={() => viewWork()}>
          View My Work
        </button>
      </div>
    </div>
  );
}

export default HomePage;
