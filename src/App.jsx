import ChatBox from "./ChatBox";
import TimeOutScreen from "./TimeOutScreen";
import useInactivityTimeout from "./useInactivityTimeout";
import OptionToggle from "./OptionToggle";
import "./App.css";

function App() {
  const showTimeout = useInactivityTimeout(10000);

  return (
    <div className="App">

      {/* Options Drawer sits OUTSIDE chatbox */}
      <OptionToggle />

      {/* Chat UI */}
      <div className="chatbox-wrapper">
        {showTimeout ? <TimeOutScreen /> : <ChatBox />}
      </div>

    </div>
  );
}

export default App;




