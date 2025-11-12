import './OptionTable.css'
import Font from './FontSize'
import Age from './Age'
import Gender from './Gender'
import HistoryInterest from './HistoryInterest'

export default function OptionTable() {
  return (
    <div className="option-table-container">
      <h1>User Options</h1>
      <p>For best user experience select from the options below</p>

      <div className="table-container">
        <Font className="font-container" />
        <Age className="age-container" />
        <Gender className="gender-container" />
        <HistoryInterest className="hist-container" />
      </div>
    </div>
  )
}

