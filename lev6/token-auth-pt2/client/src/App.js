import React, {useContext} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import {UserContext} from './context/UserProvider.js'

export default function App(){
  const { token, logout, todos } = useContext(UserContext)
  return (
    <div className="app">
      {token && <Navbar logout={logout} />}
      <Switch>
        <Route 
          exact path="/" 
          render={()=> token ? <Redirect to="/profile" /> : <Auth />}
        />
        <ProtectedRoute
          path="/profile"
          token={token}
          component={Profile}
          redirectTo="/"
          todos={todos}
        />
        {/* <Route 
          path="/profile"
          render={() => <Profile todos={todos} />}
        /> */}
        <ProtectedRoute 
          path="/public"
          token={token}
          component={Public}
          redirectTo="/"
        />
        {/* <Route 
          path="/public"
          render={() => <Public />}
        /> */}
      </Switch>
    </div>
  )
}