import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
    return (
        <Fragment>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
                <Route exact path='/' component={HomePage}></Route>
                <Route path='/activities' component={ActivityDashboard}></Route>
                <Route path='/activities/:id' component={ActivityDetails}></Route>
                <Route path='/create-activity' component={ActivityForm}></Route>
            </Container>
        </Fragment>
    );
}

export default observer(App);
