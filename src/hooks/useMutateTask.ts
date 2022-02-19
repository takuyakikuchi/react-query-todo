import axios from 'axios'
import { Task } from '../types/types'

export const editTask = (task: Task) => {
  axios.put(
    `http://127.0.0.1:8000/api/tasks/${task.id}/`,
    task
  )
}
