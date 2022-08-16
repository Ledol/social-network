import {DispatchType} from "./Store";

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
    ] as Array<MessageType>,
    newMessageText: ''
}


export const dialogsReducer = (state:initialStateType = initialState, action:DispatchType):initialStateType => {
    switch (action.type) {
        case "SEND-MESSAGE" : {
            let newMessage:MessageType  = {
                id: new Date().getTime(),
                message: state.newMessageText,}
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        }
        case "CHANGE-MESSAGE-TEXT" : {
            return {...state, newMessageText: action.payload.newMessage}
        }   // Update body new message
        default:
            console.log("Dialogs page wasn't changed")
            return state

    }
}

export type sendNewMessageACType = ReturnType<typeof sendNewMessageAC>
export const sendNewMessageAC = () => {
    return {
        type: "SEND-MESSAGE",
    }as const
}
export type changeMessageTextACType = ReturnType<typeof changeMessageTextAC>
export const changeMessageTextAC = (newMessage: string) => {
    return {
        type: "CHANGE-MESSAGE-TEXT",
        payload: {newMessage}
    }as const
}