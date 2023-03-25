import { useState } from "react"

import List from "./components/List"
import Person from "./components/Person"
import data from "./data"
import "./App.css"

function App() {
  const [people, setPeople] = useState(data)

  const clearPeopleHandler = () => {
    setPeople([])
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2>{people.length} Birthday Today</h2>
      </div>
      <div className="card-body">
        <List data={people} renderComponent={Person} />
      </div>
      <div className="card-footer">
        <button className="btn" onClick={clearPeopleHandler}>
          Clear All
        </button>
      </div>
    </div>
  )
}

export default App
