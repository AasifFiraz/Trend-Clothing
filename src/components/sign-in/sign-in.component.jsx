import React from 'react';
import FormInput from '../form-input/form-input.component'; 
import { auth ,signInWithGoogle } from '../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

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
            <div className='sign-in'>
                <h2>Already Have an Account?</h2>
                <span>Sign In</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} label='Email' handleChange={this.handleChange} required/>

                    <FormInput name='password' type='password' value={this.state.password} label='Password' handleChange={this.handleChange} required />

                    <div className="buttons">
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In With Google
                    </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;