import React from 'react'

        export const checkValidataSignUp = (email, password, name ) => {
        const isNameValid = /^[a-zA-Z ]{2,40}$/.test(name);
        const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
        const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(password);
        if (!isNameValid) return "Name is not correct"
        if(!isEmailValid)  return "Email is not valid";
        if(!isPasswordValid)  return "Password is not valid";
        return true;
        }


    export const checkValidataSignIn = (email, password, name) => {
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(password);
    
    if(!isEmailValid)  return "Email is not valid";
    if(!isPasswordValid)  return "Password is not valid";
    return true;
    }