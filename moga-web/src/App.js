import React, {useEffect, useState} from 'react'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'
import Home from "./pages/home/Home";
import Test from "./pages/test/Test";
import './App.scss'


function App() {

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const isMobile = windowSize <= 800
    const handleResize = () => {
        setWindowSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

  return (
    <div>

        <BrowserRouter>

            <Switch>

                <Route exact path={"/"} component={Home} />
                <Route exact path={"/about"} component={ null } />
                <Route exact path={"/join"} component={ null } />
                <Route exact path={"/gallery"} component={ null } />

                <Route exact path={"/test"} component={Test} />

            </Switch>

        </BrowserRouter>

    </div>
  );
}

export default App;
