import React, { useState } from "react";
import Button from "../../components/buttons/Button";
import Or from "./Or";


export default function Buttons(props) {
    const { displayLoginForm, displaySignUpForm } = props;
    return (
        <React.Fragment>
            <Button text="Log In" onPressFunction={() => displayLoginForm()} />
            <Or />
            <Button text="Sign Up" onPressFunction={() => displaySignUpForm()} />
        </React.Fragment>
    );
};