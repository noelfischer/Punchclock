import axios from 'axios'

const baseUrl = '/'

const getAll = () => {
    return axios.get(baseUrl +"users", {
        headers: {
            'Authorization': localStorage.getItem("token")
        }
    })
}

const create = newObject => {
    return axios.post(baseUrl + "users/signup", newObject)
}

const login = newObject => {
    return axios.post(baseUrl + "login", newObject)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}users/${id}`)
}

export default {
    getAll: getAll,
    create: create,
    update: update,
    login: login,
    remove: remove
}