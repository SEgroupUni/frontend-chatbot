import { useNavigate } from "react-router-dom";
import Error from "../assets/Missing.gif";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="background">
      <div className="not-found">
        <h1>404 - Page Not Found</h1>
        <h3>Sorry, the page you are looking for does not exist.</h3>

        <div>
          <img 
            src={Error}
            alt="Looking around lost gif"
          />
        </div>
        <button className="back-home" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}