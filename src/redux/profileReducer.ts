import { Dispatch } from "redux";
import { profileAPI } from "../api/api";
import { AppStateType } from "./redux-store";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "What's, wrong?", likesCount: 25 },
  ] as Array<PostsType>,
  profile: {
    aboutMe: "",
    contacts: {
      facebook: "",
      website: "",
      vk: "",
      twitter: "",
      instagram: "",
      youtube: "",
      github: "",
      mainLink: "",
    },
    lookingForAJob: false,
    lookingForAJobDescription: "",
    fullName: "",
    userId: 0,
    photos: { small: "", large: "" },
  },
  status: "" as string,
};


export const profileReducer = (
  state: initialStateType = initialState,
  action: ProfileActionType
): initialStateType => {
  switch (action.type) {
    case "PROFILE/ADD-POST": {
      let newPost: PostsType = {
        id: new Date().getTime(),
        message: action.newPost,
        likesCount: 0,
      };
      return { ...state, posts: [newPost, ...state.posts] };
    }
    case "PROFILE/REMOVE-POST":
      return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
      /*case "UPDATE-NEW-POST" : {
              return {...state, newPostText: action.payload.newPost}
          }*/
    case "PROFILE/SET-USER-PROFILE": {
      return { ...state, profile: action.payload.profile };
    }
    case "PROFILE/SET-STATUS": {
      return { ...state, status: action.payload.status };
    }
    default:
      return state;
  }
};

//ACTIONS
export const addPost = (newPost: string) => {
  return {
    type: "PROFILE/ADD-POST",
    newPost,
  } as const;
};
export const removePost = (postId: number) => {
  return{
    type: "PROFILE/REMOVE-POST",
    postId
  }as const
}
/*export type updatePostTextACType = ReturnType<typeof updatePostText>
export const updatePostText = (newPost: string) => {
    return {
        type: "UPDATE-NEW-POST",
        payload: {newPost}
    } as const
}*/
export const setUserProfile = (profile: ProfileType) => {
  return {
    type: "PROFILE/SET-USER-PROFILE",
    payload: { profile },
  } as const;
};
export const setStatus = (status: string) => {
  return {
    type: "PROFILE/SET-STATUS",
    payload: { status },
  } as const;
};

//THUNKS
export const getProfileTC = (userId: string) => {
  return async (dispatch: Dispatch, getState: () => AppStateType) => {
    if (!userId) {
      userId = JSON.stringify(getState().auth.data.id);
    }
    let data = await profileAPI.getProfile(userId)

      dispatch(setUserProfile(data.data));
  };
};
export const getUserStatusTC = (userId: string) => {
  return async (dispatch: Dispatch, getState: () => AppStateType) => {
    if (!userId) {
      userId = JSON.stringify(getState().auth.data.id);
    }
    let response = await profileAPI.getStatus(userId)

      dispatch(setStatus(response.data));
  };
};
export const updateStatusTC = (status: string) => {
  return async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
  };
};

// Types
export type PostsType = {
  id: number;
  message: string;
  likesCount: number;
};
export type ProfileType = {
  aboutMe: string;
  contacts: {
    facebook: string;
    website: string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string;
    github: string;
    mainLink: string;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: { small: string; large: string };
};
export type initialStateType = typeof initialState;

export type addPostACType = ReturnType<typeof addPost>;
export type removePostType = ReturnType<typeof removePost>
export type setUserProfileACType = ReturnType<typeof setUserProfile>;
export type setStatusACType = ReturnType<typeof setStatus>;
export type ProfileActionType =
    | addPostACType
    | setUserProfileACType
    | setStatusACType
    |removePostType;