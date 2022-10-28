import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type PostFormType = {
    newPost: string
}

const AddPostForm: FC <InjectedFormProps <PostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Enter your post" name="newPost" component="textarea"/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    );
};

export const AddPostFormRedux = reduxForm<PostFormType>({form: "profileAddPostForm"})(AddPostForm)