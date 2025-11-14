import ChatBox from "./ChatBox";
import useInactivityTimeout from "./useInactivityTimeout";
import OptionToggle from "./OptionToggle";
import "./App.css";
import Home from "./Pages/Home";
import { Navigate } from "react-router-dom";

function App() {
  const showTimeout = useInactivityTimeout(20000);

  if (showTimeout) {
    return <Navigate to="/" replace />; // full redirect to the home page
  }

  return (
    <div className="App">
      <OptionToggle />
      <div className="chatbox-wrapper">
        <ChatBox />
      </div>
    </div>
  );
}

export default App;




