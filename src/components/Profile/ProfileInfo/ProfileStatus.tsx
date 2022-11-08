import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status:string
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props:ProfileStatusType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [changedStatus, setChangedStatus] = useState<string>(props.status)

    useEffect(() => {
        setChangedStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
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

