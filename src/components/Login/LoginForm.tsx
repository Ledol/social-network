import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import { required} from "../../utils/validators/validators";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


export const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={Input} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
