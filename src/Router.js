import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

import Home from "../Components/Home"





import Herbal from "./Components/Herbal/Herbal"
import Medicinal from "./Components/Medicinal/Medicinal"

function Router() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/#about' component={Herbal} />
          <Route exact path='/#services' component={Medicinal} />
          
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Router
