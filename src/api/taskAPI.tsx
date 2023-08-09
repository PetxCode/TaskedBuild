import axios from "axios"

export interface iData {
    email?: string;
    name?: string;
    task?: string;
    userID?: string;
}

const url = 'http://localhost:5599/api/v1'

export const createTask = async (data: iData, userID: string) => {
    return await axios.post(`${url}/${userID}/create-task`, { task: data }).then((res) => {
        console.log("Reading Data: ", res.data)
        return res.data.data
    })
}

export const getTask = async () => {
    return await axios.get(`${url}/read-task`).then((res) => {
        return res.data.data
    })
}

export const deleteTask = async (taskID: string) => {
    return await axios.delete(`${url}/${taskID}/delete-task`,).then((res) => {
        return res.data.data
    })
}