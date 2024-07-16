import axios from 'axios'
import config from '../config/dev.json'

let path = '/api/v1/tasks'
let url = config.host + path


import production from '../config/production.json'

if (process.env.NODE_ENV === 'production') {
  url = production.host + path
}


export async function getListTasks() {
  return new Promise((resolve, reject) => {
    axios.get(url + '/').then((response) => {
      resolve(response.data.data)
    }).catch(err => reject(err))
  })
}

export async function getTaskById(id) {
  return new Promise((resolve, reject) => {
    axios.get(url + `/${id}`).then((response) => {
      resolve(response.data.data)
    }).catch(err => reject(err))
  })
}

export async function addTask(task) {
  return new Promise((resolve, reject) => {
    axios.post(url + `/`, task).then((response) => {
      resolve(response.data.data)
    }).catch(err => reject(err))})
}

export async function updateTask(task) {
  return new Promise((resolve, reject) => {
    axios.put(url + `/${task.id}`, task).then((response) => {
      resolve(response.data.data)
    }).catch(err => reject(err))})
}

export async function deleteTask(id) {
  return new Promise((resolve, reject) => {
    axios.delete(url + `/${id}`).then((response) => {
      resolve(response.data.data)
    }).catch(err => reject(err))
  })
}