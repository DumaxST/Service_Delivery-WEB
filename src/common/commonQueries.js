import axiosAPI from "../data/axiosConfig";

//aqui se generaran las consultas a la api

export const authUser = async (token) => {
    //enviar tokenAuth por body
    return await axiosAPI.post("/auth/login",{
        tokenAuth: token
    })
}

export const getUser = async (id) =>{
    return await axiosAPI.get(`/users/get/user`, {
        id: id
    });
}
