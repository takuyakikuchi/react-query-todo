import { useEffect, useState, VFC } from 'react'
import { Task } from '../types/types'
import { useMutateTask, editTask } from '../hooks/useMutateTask'

interface Props {
  task: Task | null
}

export const TaskEdit: VFC<Props> = ({ task }) => {
  const [newTitle, setNewTitle] = useState<string>('')
  const { createTaskMutation } = useMutateTask()

  useEffect(() => {
    if (task) {
      setNewTitle(task.title)
    }
  }, [task])

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (task) {
      editTask({...task, title: newTitle})
    } else {
      createTaskMutation.mutate(newTitle)
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value)
  }

  console.log('rendered TaskEdit')
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        className="mb-3 px-3 py-2 border border-gray-300"
        type="text"
        onChange={handleOnChange}
        value={newTitle}
      />
      <button
        className="disabled:opacity-40 my-3 mx-3 py-2 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded"
        disabled={false}
      >
        { task ? 'Update' : 'Create' }
      </button>
    </form>
  )
}
