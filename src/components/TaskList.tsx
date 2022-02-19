import { useState, useEffect, VFC } from 'react'
import { TaskItem } from './TaskItem'
import { getTasks } from '../hooks/useQueryTasks'
import { Task } from '../types/types'

interface Props {
  onClickEdit: (task: Task) => void
}

export const TaskList: VFC<Props> = ({ onClickEdit }) => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    getTasks().then(setTasks);
  }, [])

  return (
    <ul>
      {tasks.map((task: Task) => (
        <TaskItem key={task.id} task={task} onClickEdit={onClickEdit} />
      ))}
    </ul>
  )
}
