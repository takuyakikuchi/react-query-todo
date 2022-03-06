import axios from 'axios'
import { Task, MutateTaskPrams } from '../types/types'
import { useMutation, useQueryClient } from 'react-query'

const editTask = (task: MutateTaskPrams) => {
  return axios.put(
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
      if (tasksCache?.length) {
        queryClient.setQueryData<Task[]>('tasks', [
          ...tasksCache,
          res.data,
        ])
      }
    }
  })

  const editTaskMutation = useMutation(editTask, {
    // Update the cache
    onSuccess: (res, variables) => {
      const tasksCache = queryClient.getQueryData<Task[]>('tasks')
      if (tasksCache?.length) {
        queryClient.setQueryData<Task[]>('tasks', 
          tasksCache.map((task) => task.id === variables.id ? res.data : task),
        )
      }
    }
  })

  return { createTaskMutation, editTaskMutation }
}

export const deleteTask = (taskId: number) => {
  axios.delete(`http://127.0.0.1:8000/api/tasks/${taskId}/`)
}
