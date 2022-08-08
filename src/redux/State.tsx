export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}






export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'What\'s, wrong?', likesCount: 25},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Kate'},
            {id: 3, name: 'Alex'},
            {id: 4, name: 'Mike'},
            {id: 5, name: 'Helen'},
        ],
        messages: [
            {id: 1, message: 'Hey, how are you?'},
            {id: 2, message: 'Are you really?'},
            {id: 3, message: 'Have a good day!'},
            {id: 4, message: 'Wake up!'},
            {id: 5, message: 'Dear, what\'s wrong?'},
        ],
    },
    sidebar: {}
}