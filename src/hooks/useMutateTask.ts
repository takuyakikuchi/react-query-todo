import axios from 'axios'
import { Task } from '../types/types'
import { useMutation, useQueryClient } from 'react-query'

export const editTask = (task: Task) => {
  axios.put(
    `http://127.0.0.1:8000/api/tasks/${task.id}/`,
    task
  )
}

const createTask = (taskTitle: string) => {
  return axios.post(
    `http://127.0.0.1:8000/api/tasks/`,
    {
      tag : 1,
      tag_name: "Coding",
      title: taskTitle
    }
  )
}

export const useMutateTask = () => {
  const queryClient = useQueryClient()

  const createTaskMutation = useMutation(createTask, {
    // Update the cache
    onSuccess: (res) => {
      const tasksCache = queryClient.getQueryData<Task[]>('tasks')
      if (tasksCache) {
        queryClient.setQueryData<Task[]>('tasks', [
          ...tasksCache,
          res.data,
        ])
      }
    }
  })

  return { createTaskMutation }
}

export const deleteTask = (taskId: number) => {
  axios.delete(`http://127.0.0.1:8000/api/tasks/${taskId}/`)
}
