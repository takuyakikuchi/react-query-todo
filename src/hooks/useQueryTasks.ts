import { useState, useEffect } from 'react'
import axios from 'axios'
import { Task } from '../types/types'

const useQueryTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    getTasks().then(setTasks);
  }, [])

  const getTasks = async () => {
    const { data } = await axios.get<Task[]>(
      `http://127.0.0.1:8000/api/tasks/`
    )
  
    return data
  }

  return tasks
}

export default useQueryTasks;
