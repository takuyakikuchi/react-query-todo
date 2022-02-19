import { VFC } from 'react'
import { Task } from '../types/types'

interface Props {
  task: Task
}

export const TaskItem: VFC<Props> = ({ task }) => {
  return (
    <li className="my-3">
      <span className="font-bold">{task.title}</span>
      <span>
        {' : '}
        {task.tag_name}
      </span>
    </li>
  )
}
