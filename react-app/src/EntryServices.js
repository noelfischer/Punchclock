import axios from 'axios'

const baseUrl = 'entries'

const getAll = () => {

    return axios.get(baseUrl, {
        headers: {
            'Authorization': localStorage.getItem("token")
        }
    })

}

const create = newObject => {
    return axios.post(baseUrl, newObject, {
        headers: {
            'Authorization': localStorage.getItem("token")
        }
    })
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject, {
        headers: {
            'Authorization': localStorage.getItem("token")
        }
    })
}

const remove = (id) => {
        return axios.delete(`${baseUrl}/${id}`, {
            headers: {
                'Authorization': localStorage.getItem("token")
            }
        }).catch(e => {
            console.log(e)
            window.location.reload(false);
        })


}

export default {
    getAll: getAll,
    create: create,
    update: update,
    remove: remove
}