import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";



export const Login = () => {

    const onSubmitHandler = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h2>LOGIN</h2>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    );
};

