import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Grid} from '@mui/material'

import Navbar from '../components/navbar'
import Header from '../components/header'
import Home from '../components/pages/Home'
import Tasks from '../components/pages/Tasks'


function Main() {
    return (
        <div>
            <BrowserRouter>
                <Grid container spacing={0.5}>
                    <Grid xs={12} md={12} sx={{ borderRight: 1, borderColor: 'divider' }}>
                        <Header></Header>
                    </Grid>
                    <Grid xs={12} md={2} sx={{ borderRight: 1, borderColor: 'divider' }}>
                        <Navbar></Navbar>
                    </Grid>
                    <Grid xs={12} md={10}>
                        <div className="content">
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/tasks" component={Tasks}/>
                            </Switch>
                        </div>
                    </Grid>
                </Grid>
            </BrowserRouter>
        </div>
    )
}

export default Main;