import { VFC } from 'react'
import { TaskItem } from './TaskItem'
import useQueryTasks from '../hooks/useQueryTasks'
import { Task } from '../types/types'

export const TaskList: VFC = () => {
  const tasks = useQueryTasks()

  return (
    <ul>
      {tasks.map((task: Task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  )
}
