import ChatBox from "./ChatBox";
import useInactivityTimeout from "./useInactivityTimeout";
import OptionToggle from "./Options/OptionToggle";
import { Navigate } from "react-router-dom";
import NavBar from "./components/NavBar"
import './index.css';

function App() {
  const showTimeout = useInactivityTimeout(200000000);

  if (showTimeout) {
    // would like to add a are you here page before navigating to the home page //
    return <Navigate to="/" replace />; // redirects to the home page
  }

  return (
    <div> 
      <NavBar/>
    <div>
      <OptionToggle />
      <div className="chatbox-wrapper">
        <ChatBox />
      </div>
    </div>
    </div>
  );
}

export default App;




