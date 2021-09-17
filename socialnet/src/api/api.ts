import axios from "axios"

const instance = axios.create({
  withCredentials: true,
  headers: {"API-KEY": "04557cb8-61b0-426f-9f9f-fa4bd1a1ce23"},
  baseURL: "https://social-network.samuraijs.com/api/1.0"
})

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  
  follow(userId: number) {
    return instance.post(`/follow/${userId}`)
      .then(response => {
        if (response.data.resultCode === 0) {
          return response
        }
      })
  },
  unfollow(userId: number) {
    return instance.delete(`/follow/${userId}`)
      .then(response => {
        if (response.data.resultCode === 0) {
          return response
        }
      })
  },
  getProfile(userId: string) {
    return instance.get(`/profile/` + userId)
      .then(response => response.data ) 
  }
}


export const authAPI = {
  getMe() {
    return instance.get(`/auth/me`)
      .then(response => {
        return response
  })
},
}

