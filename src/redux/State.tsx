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
export type FriendsType = {
    id: number
    name: string
    image: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
export type FriendsPageType = {
    friends: Array<FriendsType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: FriendsPageType
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
    sidebar: {
        friends: [
            {
                id: 1,
                name: ' Dmitry',
                image: 'https://media.istockphoto.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618801?k=20&m=1227618801&s=170667a&w=0&h=Pc_xaak-2cG8pSpHVVbTN3je0BYsxksghZZwzrEuYy4='
            },
            {
                id: 2,
                name: ' Kate',
                image: 'https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-woman-vector-vector-id1227618778?s=2048x2048'
            },
            {
                id: 3,
                name: ' Alex',
                image: 'https://img.freepik.com/premium-vector/stylish-flat-black-white-human-avatar-social-media-presentation-people-avatar-icon-avatar-face-head-with-forearm-human-portrait-isolated-blue-background-vector-graphics_589396-126.jpg'
            },

        ]
    }
}