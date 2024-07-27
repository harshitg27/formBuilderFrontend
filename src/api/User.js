import axios from "axios";

const BACKEND_ORIGIN_URL = 'http://localhost:4005'

const Login = async (email , password) =>{
    try {
        const response = await axios.post(`${BACKEND_ORIGIN_URL}/user/login` , {email , password})
        return response
    } catch (error) {
        return error.response ;
    }
}

const Register = async (userName , email  , password) =>{
    try {
        const response = await axios.post(`${BACKEND_ORIGIN_URL}/user/register` , {userName , email , password})
        return response
    } catch (error) {
        return error.response ;
    }
}

const UserData = async () =>{
    try {
        const token = localStorage.getItem('userToken')
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.get(`${BACKEND_ORIGIN_URL}/user/getuser` , config)
        return response
    } catch (error) {
        return error.response
    }
}

export {Login , Register , UserData}