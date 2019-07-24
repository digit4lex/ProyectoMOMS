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
         <Route path="/register" component={Register} exact={true}/>

         <Route path="/sobreti" component={PersonalData} exact={true}/>
         <Route path="/congrats" component={Congrats} exact={true}/>

         <Route path="/aboutme" component={PersonalData} exact={true}/>

         <Route path="/workprofile" component={WorkProfile} exact={true}/>
         <Route path="/login" component={Login} exact={true}/>
         <Route component={NotFoundPage}/>
        </Switch>

    </div>
     
    </BrowserRouter>
)

export default AppRouter;