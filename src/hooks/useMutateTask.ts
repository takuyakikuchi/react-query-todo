import axios from 'axios'
import { Task } from '../types/types'

export const editTask = (task: Task) => {
  axios.put(
    `http://127.0.0.1:8000/api/tasks/${task.id}/`,
    task
  )
}

export const createTask = (taskTitle: string) => {
  axios.post(
    `http://127.0.0.1:8000/api/tasks/`,
    {
      tag : 1,
      tag_name: "Coding",
      title: taskTitle
    }
  )
}

export const deleteTask = (taskId: number) => {
  axios.delete(`http://127.0.0.1:8000/api/tasks/${taskId}/`)
}
