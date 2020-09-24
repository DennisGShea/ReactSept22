import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './scenes/Home'
import Courses from './scenes/Courses' 
import './App.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route  exact path="/courses" component={Courses} />
          <Route  path="/courses/:id" component={Courses} />
          <Route  exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App


