import { TextInput, Text, View } from 'react-native';
import React, { Component } from 'react';
import firebase from 'firebase';
import { Card, CardSection, CustomButton, Input } from './common';

class LoginForm extends Component {
    state={ status: false,
            shownote: 'Sign Up', 
            showbutton: 'login',
            email: '',
            password: '',
            message: '',
            messagedetail: ''
          }

    inputTelp() {
        if (this.state.status) {
            return (
                <CardSection>
                    <Input text='telephone' placeholder='xxxx-xxxx-xxxx' />
                </CardSection>
                   );
            }
        }

    authFirebase() {
            const {
                status,
                email,
                password
            } = this.state;

            if (!status) {
                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then(() => this.setState({ message: 'sukses login' })) //then minta sebuah function
                    .catch((error) => this.setState({ message: 'gagal login: ', messagedetail: error.message })); // catch minta sebuah function
            } else {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => this.setState({ message: 'sukses sign up' }))
                    .catch((error) => this.setState({ message: 'gagal signUp: ', messagedetail: error.message }));
            }        
        }

        renderMessage() {
            if (this.state.message !== '') {
                return (
                    <CardSection>
                        <Text style={{ padding: 5 }}>{this.state.message} {this.state.messagedetail} </Text>
                    </CardSection>
                );
            }
        }
    

    renderLogic() {
        if (this.state.status) {
            this.setState({ shownote: 'Sign Up', showbutton: 'login', status: false });
            this.inputTelp();
        }
        else {
            this.setState({ shownote: 'Login', showbutton: 'Sign Up', status: true });
            this.inputTelp();
        }
    }

    render() {
        return (
            
            <Card>
                <CardSection>
                    <Input 
                        text='email' 
                        placeholder='name@email.com'
                        textChanged={(text) => this.setState({ email: text })} // parsing function
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        text='password' 
                        placeholder='password'
                        textChanged={(text) => this.setState({ password: text })} //parsing function
                        secureOps //automatis nilainya true
                    /> 
                </CardSection>

                {this.inputTelp()}

                {this.renderMessage()}

                <CardSection>
                    <CustomButton 
                        bgcolor='green'
                        buttonPressed={() => this.authFirebase()}//atau this.authFirebase.bind(this)
                    >
                        {this.state.showbutton}
                    </CustomButton>
                </CardSection>

                <CardSection>
                    <CustomButton buttonPressed={this.renderLogic.bind(this)} bgcolor='white'>
                        or,{this.state.shownote}
                    </CustomButton>
                </CardSection>
            </Card>

        );
    }
}

export default LoginForm;