import React, {ChangeEvent, useState} from 'react';

type ProfileStatusType = {
    status:string
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props:ProfileStatusType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [changedStatus, setChangedStatus] = useState<string>(props.status)

    const activateEditMode = () => {
        setEditMode(true)
        setChangedStatus(props.status)
    }

    const onStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        setChangedStatus(e.currentTarget.value)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(changedStatus)
    }

    return (
        editMode
            ? <input value={changedStatus} onChange={onStatusChangeHandler} onBlur={deactivateEditMode} autoFocus />
            : <span onDoubleClick={activateEditMode}>{props.status || 'Empty Status Field'}</span>
    )
};

