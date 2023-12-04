import axios from "axios"

const baseUrl = 'http://localhost:3007/users/'

const register = (user) => {
    return axios.post(`${baseUrl}/register`, user)
}

const login = (credentials) => {
    return axios.post(`${baseUrl}/login`, credentials)
}


const getToken = () => `bearer ${window.localStorage.getItem('token')}`

const getUserInfo = () => {
    return axios.get(`${baseUrl}/userinfo`, {
        headers: { Authorization: getToken() }
    })
}

const updateUserInfo = (userInfo) => {
    return axios.put(`${baseUrl}/userinfo`, userInfo, {
        headers: { Authorization: getToken() }
    })
};
const userService = {
    register, login, getUserInfo,updateUserInfo
}
export default userService 