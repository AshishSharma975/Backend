import axios from "axios";


async function register(username,email,password) {
    try{
      const response = await axios.post("http://localhost:3000/api/auth/register",{
        username,
        email,
        password
      },{
        withCredentials:true
      });
      return response.data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

async function login(email,password) {
    try{
        const response = await axios.post("http://localhost:3000/api/auth/login",{
            email,
            password
        },{
            withCredentials:true
        });
        return response.data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

export {register,login};