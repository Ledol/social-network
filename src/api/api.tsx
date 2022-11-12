import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "36c6d8e6-c7f6-48a8-984f-4e1b0d11ee5b",
  },
});

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  unfollowUser(userId: number) {
    return instance.delete(`follow/${userId}`);
  },
  followUser(userId: number) {
    return instance.post(`follow/${userId}`, {});
  },
};

export const profileAPI = {
  getProfile(userId: string) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId: string) {
    return instance.get("profile/status/" + userId);
  },
  updateStatus(status: string) {
    return instance.put("profile/status", { status });
  },
};

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`);
  },
  login(email: string, password: string, rememberMe: boolean) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
