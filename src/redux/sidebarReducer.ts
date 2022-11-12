export type FriendsType = {
  id: number;
  name: string;
  image: string;
};

export type initialStateType = typeof initialState;
let initialState = {
  friends: [
    {
      id: 1,
      name: " Dmitry",
      image:
        "https://media.istockphoto.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618801?k=20&m=1227618801&s=170667a&w=0&h=Pc_xaak-2cG8pSpHVVbTN3je0BYsxksghZZwzrEuYy4=",
    },
    {
      id: 2,
      name: " Kate",
      image:
        "https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-woman-vector-vector-id1227618778?s=2048x2048",
    },
    {
      id: 3,
      name: " Alex",
      image:
        "https://img.freepik.com/premium-vector/stylish-flat-black-white-human-avatar-social-media-presentation-people-avatar-icon-avatar-face-head-with-forearm-human-portrait-isolated-blue-background-vector-graphics_589396-126.jpg",
    },
  ],
};

export const sidebarReducer = (
  state: initialStateType = initialState,
  action: any
): initialStateType => {
  return state;
};
