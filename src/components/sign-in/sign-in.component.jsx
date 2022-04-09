import React from 'react';
import FormInput from '../form-input/form-input.component';
import { auth ,signInWithGoogle } from '../../firebase/firebase.utils';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import CustomButton from '../custom-button/custom-button.component';
import { SignInContainer, SignInButtonComponent,SignInFormContainer, SignInSpanText } from './sign-in.styles';

const SignInGoogleButtonComponent = styled(FontAwesomeIcon)`
    font-size: 15px;
    position: relative;
    right: 10px;
`

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: '', password: ''})

        } catch (error) {
            console.log('Error when signing in')
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        console.log(e.target)

        this.setState({ [name]: value })
        console.log(this.state.email)
    }

    render(){
        return(
            <SignInContainer>
                <h2>Already Have an Account?</h2>
                <SignInSpanText>Sign In</SignInSpanText>

                <SignInFormContainer onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} label='Email' handleChange={this.handleChange} required/>

                    <FormInput name='password' type='password' value={this.state.password} label='Password' handleChange={this.handleChange} required />

                    <SignInButtonComponent>
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        <SignInGoogleButtonComponent icon={faGoogle} />
                        Sign In With Google
                    </CustomButton>
                    </SignInButtonComponent>
                    
                </SignInFormContainer>
            </SignInContainer>
        )
    }
}

export default SignIn;