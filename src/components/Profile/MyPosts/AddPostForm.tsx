import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

export type PostFormType = {
    newPost: string
}

const maxLength10 = maxLengthCreator(10)

const AddPostForm: FC <InjectedFormProps <PostFormType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Enter your post"
                       name="newPost"
                       component={Textarea}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    );
};

export const AddPostFormRedux = reduxForm<PostFormType>({form: "profileAddPostForm"})(AddPostForm)