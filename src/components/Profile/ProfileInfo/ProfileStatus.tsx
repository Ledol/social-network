import React, {ChangeEvent, useState} from 'react';

export const ProfileStatus = () => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [changedStatus, setChangedStatus] = useState<string>("First status")

debugger
    const changeEditMode = () => {
        setEditMode(!editMode)
        setChangedStatus(changedStatus)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        setChangedStatus(e.currentTarget.value)
    }

    const onBlurHandler = () => {
        setEditMode(!editMode)
        setChangedStatus(changedStatus)
    }

    return (
        editMode
            ? <input value={changedStatus} onChange={onChangeHandler} onBlur={onBlurHandler} autoFocus />
            : <span onDoubleClick={changeEditMode}>{changedStatus}</span>
    )
};

