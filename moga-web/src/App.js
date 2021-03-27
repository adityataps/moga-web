import React from 'react'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'
import Home from "./pages/home/Home";
import Test from "./pages/test/Test";
import './App.scss'


function App() {
  return (
    <div>

        <BrowserRouter>

            <Switch>

                <Route exact path={"/"} component={Home} />
                <Route exact path={"/test"} component={Test} />

            </Switch>

        </BrowserRouter>

    </div>
  );
}

export default App;
