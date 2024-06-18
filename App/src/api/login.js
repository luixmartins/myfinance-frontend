import axios from "axios";

const createLogin = async (user) => {

    try { 
        const response = await axios.post('http://127.0.0.1:8000/account/login/', user)
        
        return response 

    } catch (error) {
        return error 
    }
} 

export default createLogin; 