import Navbar from '../components/navbar/navbar'
import  { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";
import Home from '../components/home/Home'
import Contact from '../components/contact/Contact'
import About from '../components/about/About'
import Profile from '../components/user/Profile'

function Main() {
    return (
        <div>
            <BrowserRouter>
                <Navbar></Navbar>
                <div className="content">
                
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/about" component={About}/>
                        <Route path="/profile/:username" component={Profile}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Main;