import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://i.chaoxing.com/base?t=1760690627096',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id:number){
    return apiClient.get('/events/'+id)
  }
}


