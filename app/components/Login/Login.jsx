import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Alert, Panel, Form, FormGroup, ControlLabel, FormControl, Checkbox, Button} from 'react-bootstrap';
import {hashHistory} from 'react-router';
import {login} from '../Service/Service.jsx';

const styles = {
    logoStyle: {
        marginTop: '15px',
        marginBottom: '15px',
    },

    loginBtnStyle: {
        fontSize: '18px',
        height: '50px',
        width: '100%',
        backgroundColor: '#eee',
        marginTop: '15px',
        marginBottom: '5px',
    },

    inputStyle: {
        textAlign: 'center',
        height: '50px',
        marginTop: '5px',
        marginBottom: '5px',
    },

    linkStyle: {
        fontSize: '16px',
        color: '#00838F',
        marginTop: '30px',
        marginBottom: '30px',
        opacity: 0.7,
    },
};

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alertVisible: false,
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        // console.log(this.username.value);
        // console.log(this.password.value);
        console.log(this.rememberMe.value);
        login(this.username.value, this.password.value, this.rememberMe.value, function(res){
            if (res == "Invalid login") {
                this.setState({alertVisible: true});
            } else {
                hashHistory.push('/home');
                // this.setState({alertVisible: false});
            }
        }.bind(this));
    }

    render() {
        return (
            <Grid fluid={false}>
                <Row>
                    <Col xs={6} xsOffset={3}>
                        <div>
                            <Panel style={{textAlign: 'center'}}>
                                <Row style={{paddingLeft: '30px', paddingRight: '30px'}}>
                                    {/*<img src="../../assets/images/logo.png" style={styles.logoStyle}/>*/}
                                    <Form horizontal>
                                        <FormGroup controlId="formHorizontalEmail">
                                            <Col sm={12} style={{paddingTop:'50px'}}>
                                                <FormControl inputRef={(ref) => {this.username = ref}} type="text" placeholder="Username" style={styles.inputStyle} onChange={() => this.setState({alertVisible: false})}/>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup controlId="formHorizontalPassword">
                                            <Col sm={12}>
                                                <FormControl inputRef={(ref) => {this.password = ref}} type="password" placeholder="Password"  style={styles.inputStyle} onChange={() => this.setState({alertVisible: false})}/>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup>
                                            <Col sm={12}>
                                                <Button type="submit" style={styles.loginBtnStyle} onClick={this.handleLogin}>
                                                    Log in
                                                </Button>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup>
                                            <Checkbox inputRef={ref => {this.rememberMe = ref;}}>
                                                Remember me next time
                                            </Checkbox>
                                        </FormGroup>

                                        { this.state.alertVisible && 
                                            <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
                                                <h4>Invalid username or password!</h4>
                                                <p>Please try again.</p>
                                            </Alert>
                                        }
                                        <a href='#'> <h1 style={styles.linkStyle}> Forgot Password? </h1> </a>
                                    </Form>
                                </Row>
                            </Panel>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}