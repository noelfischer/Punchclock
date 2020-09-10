import axios from 'axios'

const baseUrl = '/'

const getAll = () => {
    return axios.get(baseUrl + "users", {
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
    return axios.put(`${baseUrl}users`, newObject, {
        headers: {
            'Authorization': localStorage.getItem("token")
        }
    })
}

const remove = (id) => {
    return axios.delete(`${baseUrl}users/${id}`, {
        headers: {
            'Authorization': localStorage.getItem("token")
        }
    })
}

    export default {
        getAll: getAll,
        create: create,
        update: update,
        login: login,
        remove: remove
    }