import { VFC } from 'react'
import { Task } from '../types/types'
import { PencilAltIcon } from '@heroicons/react/solid'

interface Props {
  task: Task
  onClickEdit: (task: Task) => void
}

export const TaskItem: VFC<Props> = ({ task, onClickEdit }) => {
  const handleOnClick = () => {
    onClickEdit(task)
  }

  return (
    <li className="my-3">
      <span className="font-bold">{task.title}</span>
      <span>
        {' : '}
        {task.tag_name}
      </span>

      <div className="flex float-right ml-20">
        <PencilAltIcon
          className="h-5 w-5 mx-1 text-blue-500 cursor-pointer"
          onClick={handleOnClick}
        />
      </div>
    </li>
  )
}
