import http from "../http";

const getAll = () => {
    return http.get("/users/getAllUsers");
}

const get = (id) => {
    return http.get(`/users/user/${id}`);
}

const create = (data) => {
    return http.post(`/users/insertUser`, data);
}

const update = (data) => {
    return http.post(`/users/updateUser`, data);
}

const remove = (id) => {
    return http.post(`/users/deleteUser`, { id });
    //return http.delete(`/users/deleteUser/${id}`);
}

const authenticate = (user) => {
    return http.post(`/users/authenticateUser`, user);
}


const UserService = {
    getAll,
    get,
    create,
    update,
    remove,
    authenticate
}

export default UserService;