import './OptionTable.css'
import Age from './Age'
import Gender from './Gender'
import HistoryInterest from './HistoryInterest'
import DarkMode from './DarkMode'

export default function OptionTable({userOptions, setUserOptions, globalVolume}) { 
  return (
    <div className="option-table-container">
      <h1>User Options</h1>
      <p>For best user experience select from the options below</p>

      <div className="table-container">
        <Age
          className="age-container"
          setUserOptions={setUserOptions}
          currentSelection={userOptions.ageGroup}
          globalVolume={globalVolume} 
        />
        <Gender
          className="gender-container"
          setUserOptions={setUserOptions}
          currentSelection={userOptions.gender}
          globalVolume={globalVolume} 
        />
        <HistoryInterest
          className="history-container"
          setUserOptions={setUserOptions}
          currentSelection={userOptions.historyInterest}
          globalVolume={globalVolume} 
        />
        <DarkMode
          className="darkmode-container"
          setUserOptions={setUserOptions}
          currentSelection={userOptions.DarkMode}
          globalVolume={globalVolume} 
        />
      </div>
    </div>
  )
}

