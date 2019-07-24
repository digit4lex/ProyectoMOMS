import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import Register from '../components/Register';
import PersonalData from '../components/PersonalData'
import WorkProfile from '../components/WorkProfile'
import Header from '../components/Header';
import Login from '../components/Login';
import Congrats from '../components/Congrats';


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
         <Route path="/login" component={Login} />
         <Route component={NotFoundPage}/>
        </Switch>

    </div>
     
    </BrowserRouter>
)

export default AppRouter;