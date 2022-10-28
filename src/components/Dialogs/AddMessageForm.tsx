import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type FormDataType = {
    newMessage: string

}
export const AddMessageForm: FC <InjectedFormProps <FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Enter your message" name="newMessage" component="textarea"  />
            </div>
            <div>
                <button >New message</button>
            </div>
        </form>
    );
};

export const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)
