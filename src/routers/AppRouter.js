import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import Register from '../components/Register';
import PersonalData from '../components/PersonalData'
import WorkProfile from '../components/WorkProfile'
import Profile from '../components/Profile';
import Header from '../components/Header';
import Login from '../components/Login';
import Congrats from '../components/Congrats';
import AllOk from '../components/AllOk';
import History from '../components/History'


const AppRouter = () => (

    <BrowserRouter>
    <div>

        <Header/>

        <Switch>
         <Route path="/" component={HomePage} exact={true}/>
         <Route path="/register" component={Register} />
         <Route path="/congrats" component={Congrats} />
         <Route path="/aboutme" component={PersonalData} />
         <Route path="/workprofile" component={WorkProfile} />
         <Route path="/profile" component={Profile}/>
         <Route path="/allOk" component={AllOk}/>
         <Route path="/history" component={History}/>
         <Route path="/login" component={Login} />
         <Route component={NotFoundPage}/>
        </Switch>

    </div>
     
    </BrowserRouter>
)

export default AppRouter;