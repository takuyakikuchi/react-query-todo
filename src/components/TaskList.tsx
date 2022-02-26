import { VFC } from 'react'
import { TaskItem } from './TaskItem'
import { useQueryTasks } from '../hooks/useQueryTasks'
import { Task } from '../types/types'

interface Props {
  onClickEdit: (task: Task) => void
}

export const TaskList: VFC<Props> = ({ onClickEdit }) => {
  const {isLoading, isError, data: tasks, error} = useQueryTasks()

  console.log('rendered TaskList')
  if (isLoading) return <div>{'Loading...'}</div>
  if (isError) return <div>{`Error: ${error}`}</div>
  return (
    <ul>
      {tasks?.map((task: Task) => (
        <TaskItem key={task.id} task={task} onClickEdit={onClickEdit} />
      ))}
    </ul>
  )
}
