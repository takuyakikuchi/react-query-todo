import { VFC } from 'react'
import { Task } from '../types/types'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import { deleteTask } from '../hooks/useMutateTask'

interface Props {
  task: Task
  onClickEdit: (task: Task) => void
}

export const TaskItem: VFC<Props> = ({ task, onClickEdit }) => {
  const handleOnClick = () => {
    onClickEdit(task)
  }

  const handleOnClickDelete = async () => {
    await deleteTask(task.id)

    window.location.reload()
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
        <TrashIcon
          className="h-5 w-5 text-blue-500 cursor-pointer"
          onClick={handleOnClickDelete}
        />
      </div>
    </li>
  )
}
