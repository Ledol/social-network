import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


export type FormDataType = {
    newMessage: string

}
const maxLength50 = maxLengthCreator(50)
export const AddMessageForm: FC <InjectedFormProps <FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Enter your message"
                       name="newMessage"
                       component={Textarea}
                       validate={[required, maxLength50]}
                />
            </div>
            <div>
                <button >New message</button>
            </div>
        </form>
    );
};

export const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)
