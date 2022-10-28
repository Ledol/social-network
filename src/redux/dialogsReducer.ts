
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type initialStateType = typeof initialState;
let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Kate'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Mike'},
        {id: 5, name: 'Helen'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hey, how are you?'},
        {id: 2, message: 'Are you really?'},
        {id: 3, message: 'Have a good day!'},
        {id: 4, message: 'Wake up!'},
        {id: 5, message: 'Dear, what\'s wrong?'},
    ] as Array<MessageType>
}

export type DialogsActionType = sendNewMessageACType

export const dialogsReducer = (state:initialStateType = initialState, action:DialogsActionType):initialStateType => {
    switch (action.type) {
        case "SEND-MESSAGE" : {
            let newMessage:MessageType  = {id: new Date().getTime(), message: action.newMessage}
            return {...state, messages: [...state.messages, newMessage]}
        }
       /* case "UPDATE-NEW-MESSAGE" : {
            return {...state, newMessageText: action.payload.newMessage}
        }*/
        default:
            console.log("Dialogs page wasn't changed")
            return state

    }
}

export type sendNewMessageACType = ReturnType<typeof sendNewMessage>
export const sendNewMessage = (newMessage: string) => {
    return {
        type: "SEND-MESSAGE",
        newMessage
    }as const
}
/*
export type updateNewMessageACType = ReturnType<typeof updateNewMessage>
export const updateNewMessage = (newMessage: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE",
        payload: {newMessage}
    }as const
}*/
