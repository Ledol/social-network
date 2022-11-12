import {addPost, initialStateType, PostsType, profileReducer, removePost, setUserProfile} from "./profileReducer";

let startState: initialStateType

beforeEach(() => {
    startState = {
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
})

test ("correct post should be added", () => {

    const action = addPost("Test post is success!")
    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(3);
    expect(endState.posts[0].message).toBe("Test post is success!");
})
test ("correct post length should be after remove post", () => {

    const action = removePost(2)
    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(1);
    expect(endState.posts[0].message).toBe("Hi, how are you?");

})
test ("correct post length shouldn't be after remove post", () => {

    const action = removePost(1000)
    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(2);


})
test ("correct profile should be changed", () => {

    const newProfile = {
            aboutMe: "Test be success",
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
            lookingForAJob: true,
            lookingForAJobDescription: "",
            fullName: "",
            userId: 5,
            photos: { small: "", large: "" },
        }

    const action = setUserProfile(newProfile)
    const endState = profileReducer(startState, action)

    expect(endState.profile.aboutMe).toBe("Test be success");
    expect(endState.profile.lookingForAJob).toBe(true);
    expect(endState.profile.userId).toBe(5);
})