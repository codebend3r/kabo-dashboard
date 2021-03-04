import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from '@components/Header'
import UserWidget from '@components/UserWidget'
import Home from '@route-components/Home'
import Login from '@route-components/Login'

import './App.scss'

const App = () => {
  useEffect(() => {}, [])

  return (
    <div className="o-app">
      <div className="o-container">
        <Header />
        <UserWidget />

        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
