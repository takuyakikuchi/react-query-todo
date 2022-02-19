import { useEffect, useState, VFC } from 'react'
import { Task } from '../types/types'
import { editTask } from '../hooks/useMutateTask'

interface Props {
  task: Task
}

export const TaskEdit: VFC<Props> = ({ task }) => {
  const [newTitle, setNewTitle] = useState<string>('')

  useEffect(() => {
    setNewTitle(task.title)
  }, [task.title])

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await editTask({...task, title: newTitle})

    window.location.reload()
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value)
  }

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
        Update
      </button>
    </form>
  )
}
