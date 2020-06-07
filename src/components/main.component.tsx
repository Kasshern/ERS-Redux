import React from 'react';
import { Switch, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import  NavComponent  from './nav.component';
import  TicketComponent  from './pages/ticket.component';
import  ReimbursementComponent  from './pages/reimbursement.component';
import './main.component.css';

export const MainComponent: React.FC = () => {
    return <div id="main-component">
        <HashRouter>
            <NavComponent></NavComponent>
            <main>
                <Switch>
                    <Route exact path ='/'>
                        <TicketComponent />
                    </Route>
                    <Route path ='/reimbursement'>
                        <ReimbursementComponent />
                    </Route>
                </Switch>
            </main>
        </HashRouter>

    </div>
}