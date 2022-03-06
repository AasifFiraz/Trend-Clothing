import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import './sign-up.syles.scss';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state

        if(password !== confirmPassword){
            alert("Password and Confirm Password does not match")
            return;
        }else{

            try{

                const { user } = await auth.createUserWithEmailAndPassword(email,password);

                await createUserProfileDocument(user, {displayName})

                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''  
                })
            }catch(error){
                console.log("error occured when signing up", error)
            }

        }
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value }, () => {
            console.log(this.state)
        })
    }
    
    render(){
        const { displayName, email, password, confirmPassword } = this.state
        return(
            <div className="sign-up">
                <h2 className='title'>Don't Have an Account?</h2>
                <span>Sign Up</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name="displayName" value={displayName} onChange={this.handleChange} label="Display Name" required />
                    <FormInput type='email' name="email" value={email} onChange={this.handleChange} label="Email" required />
                    <FormInput type='password' name="password" value={password} onChange={this.handleChange} label="Password" required />
                    <FormInput type='password' name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirm Password" required />                    
                
                    <CustomButton type="submit"> Sign Up </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;