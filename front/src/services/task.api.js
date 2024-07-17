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
      resolve(response.data)
    }).catch(error =>{
      if (error.response) {
        console.error('Error:', error.response);
        reject(`Error: ${error.response.data.message}`)
      } else if (error.request) {
        console.error('Request error:', error.request);
        reject('Request error: No response received')
      } else {
        console.error('Request setup error:', error.message);
        reject(`Request setup error:  ${error.message}`)
      }
    })
  })
}

export async function getTaskById(id) {
  return new Promise((resolve, reject) => {
    axios.get(url + `/${id}`).then((response) => {
      resolve(response.data)
    }).catch(error =>{
      if (error.response) {
        console.error('Error:', error.response);
        reject(`Error: ${error.response.data.message}`)
      } else if (error.request) {
        console.error('Request error:', error.request);
        reject('Request error: No response received')
      } else {
        console.error('Request setup error:', error.message);
        reject(`Request setup error:  ${error.message}`)
      }
    })
  })
}

export async function addTask(task) {
  return new Promise((resolve, reject) => {
    axios.post(url + '/', task).then((response) => {
      resolve(response.data)
    }).catch(error =>{
      if (error.response) {
        console.error('Error:', error.response);
        reject(`Error: ${error.response.data.message}`)
      } else if (error.request) {
        console.error('Request error:', error.request);
        reject('Request error: No response received')
      } else {
        console.error('Request setup error:', error.message);
        reject(`Request setup error:  ${error.message}`)
      }
    })
  })
}

export async function updateTask(task) {
  return new Promise((resolve, reject) => {
    console.log('update task', task);
    axios.put(url + `/${task._id}`, task).then((response) => {
      resolve(response.data)
    }).catch(error =>{
      if (error.response) {
        console.error('Error:', error.response);
        reject(`Error: ${error.response.data.message}`)
      } else if (error.request) {
        console.error('Request error:', error.request);
        reject('Request error: No response received')
      } else {
        console.error('Request setup error:', error.message);
        reject(`Request setup error:  ${error.message}`)
      }
    })
  })
}

export async function deleteTask(id) {
  return new Promise((resolve, reject) => {
    axios.delete(url + `/${id}`).then((response) => {
      resolve(response.data)
    }).catch(error =>{
      if (error.response) {
        console.error('Error:', error.response);
        reject(`Error: ${error.response.data.message}`)
      } else if (error.request) {
        console.error('Request error:', error.request);
        reject('Request error: No response received')
      } else {
        console.error('Request setup error:', error.message);
        reject(`Request setup error:  ${error.message}`)
      }
    })
  })
}