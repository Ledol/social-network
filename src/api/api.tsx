import axios from "axios";

const baseURL = `https://social-network.samuraijs.com/api/1.0/`;

export const usersAPI = {
    getUsers (currentPage: number, pageSize: number) {
        return axios.get(`${baseURL}users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        })
            .then((response) => {
                return response.data;
            })
    },
    unfollowUser (userId: number) {
        return axios.delete(`${baseURL}follow/${userId}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "36c6d8e6-c7f6-48a8-984f-4e1b0d11ee5b"
            }
        })
    },
    followUser (userId: number) {
        return  axios.post(`${baseURL}follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "36c6d8e6-c7f6-48a8-984f-4e1b0d11ee5b"
            }
        })
    }
}

export const profileAPI = {
    getProfile (userId: string) {
        return axios.get(`${baseURL}profile/` + userId)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    getAuth() {
        return axios.get(`${baseURL}auth/me`, {
            withCredentials: true
        })
    }
}

