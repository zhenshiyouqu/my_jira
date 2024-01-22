import axios from "axios";

const host = "http://localhost:8080"
const getHeader = () => {
    return {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
        'User':localStorage.getItem("user")
    }
}
//注册账号
export const registerAccount = (data) => {
    return axios.post(host+"/user/register",
        data,
        {

        }).then((res) => {
        console.log(res.data)
        if (res.data.code === 200) {
            return true
        }
        else {
            return false
        }
    }).catch((err) => {
        console.log("捕获错误=>", err)
        return false
    })
}
//登录账号
export const loginAccount = (data) => {
    return axios.post(host+"/user/login", data).then((res) => {
        console.log(res.data)
        if (res.data.code === 200) {
            localStorage.setItem("token", res.data.data)
            return true
        }
        else {
            return false
        }
    }).catch((err) => {
        console.log("捕获错误=>", err)
        return false
    })
}



export const getBugs = (data) => {
    return axios.get(host+"/bug/get/bugs",{
            headers: getHeader(),
            params: {
                creatorId: localStorage.getItem("user")
            }
        }
        ).then((res) => {
        console.log(res.data)
        if (res.data.code === 200) {
            return res.data.data
        }
        else {
            return []
        }
    }).catch((err) => {
        console.log("捕获错误=>", err)
        return []
    })
}



