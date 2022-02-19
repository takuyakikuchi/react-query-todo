import axios from 'axios'
import { Task } from '../types/types'

export const getTasks = async () => {
  const { data } = await axios.get<Task[]>(
    `http://127.0.0.1:8000/api/tasks/`
  )

  return data
}
