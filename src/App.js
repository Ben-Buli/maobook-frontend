
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import MyNav from "./component/UI/MyNav";
import ScrollToTop from "./component/UI/ScrollToTop";
import Store from "./pages/Store.js";


function App() {
  return (
    <Router>
      <>
        <MyNav />
          <ScrollToTop>
            <Switch>
              <Route path="/store">
                <Store />
              </Route>
                <Home />
            </Switch>
          </ScrollToTop>
      </>
    </Router>
  )
}

export default App;
