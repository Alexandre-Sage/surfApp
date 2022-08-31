import React, { useState } from "react";
import Button from "../../components/buttons/Button";
import Or from "./Or";

declare interface LandingPageButtonsPropsInterface {
    displayLoginForm: Function,
    displaySignUpForm: Function
}

export default function Buttons(props: LandingPageButtonsPropsInterface): JSX.Element {
    const { displayLoginForm, displaySignUpForm } = props;
    return (
        <React.Fragment>
            <Button text="Log In" onPressFunction={() => displayLoginForm()} />
            <Or />
            <Button text="Sign Up" onPressFunction={() => displaySignUpForm()} />
        </React.Fragment>
    );
};