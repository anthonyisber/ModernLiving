import http from "../http";

const getAll = () => {
    return http.get("/property/getAllProperty");
}

const get = (id) => {
    return http.get(`property/getPropertyById/:id${id}`);
}

const create = (data) => {
    return http.post(`/users/addProperty`, data);
}

const update = (data) => {
    return http.post(`/proprety/updateProperty`, data);
}

const remove = (id) => {
    return http.post(`/deleteProperty/:id`, { id });
}

const PropertyService = {
    getAll,
    get,
    create,
    update,
    remove
}

export default PropertyService;


