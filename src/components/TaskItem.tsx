import { VFC } from 'react'
import { useDispatch } from 'react-redux'
import { Task } from '../types/types'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import { useMutateTask } from '../hooks/useMutateTask'
import { setSelectedTask } from '../slices/todoSlice'

interface Props {
  task: Task
}

export const TaskItem: VFC<Props> = ({ task }) => {
  const { deleteTaskMutation } = useMutateTask()
  const dispatch = useDispatch()

  console.log('rendered TaskItem')
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
          onClick={() => dispatch(setSelectedTask(task))}
        />
        <TrashIcon
          className="h-5 w-5 text-blue-500 cursor-pointer"
          onClick={() => deleteTaskMutation.mutate(task.id)}
        />
      </div>
    </li>
  )
}
