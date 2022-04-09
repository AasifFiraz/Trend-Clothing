import React from "react";
import SignIn from "../../sign-in/sign-in.component";
import SignUp from "../../sign-up/sign-up.component";
import styled from "styled-components";

const SignInAndSignUpContainer = styled.div`
    width: 850px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
`

const SignInAndSignUpPage = () =>{
    return (
        <SignInAndSignUpContainer>
            <SignIn />
            <SignUp />
        </SignInAndSignUpContainer>
    )
}

export default SignInAndSignUpPage;