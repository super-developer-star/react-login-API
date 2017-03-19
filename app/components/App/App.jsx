import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';
import Login from '../Login/Login.jsx';
import Home from '../Home/Home.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const styles = {
    bodyStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}

export default class App extends React.Component {
    render() {
        return (
            <div style={styles.bodyStyle}> 
                <Grid fluid={true} style={{paddingLeft: 0, paddingRight: 0}}>
                    <Router history={hashHistory}>
                        <Route path='/' component={Login} />
                        <Route path='/home' component={Home} />
                    </Router>
                </Grid>
            </div>
        );
    }
}