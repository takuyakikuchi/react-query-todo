import { VFC, useState, useEffect, memo } from 'react'
import { useAppSelector } from '../app/hooks'
import { selectedTask } from '../slices/todoSlice'
import { useMutateTask } from '../hooks/useMutateTask'

const TaskEdit: VFC = () => {
  const selectedTaskOnEdit = useAppSelector(selectedTask)
  const [titleInput, setTitleInput] = useState<string>('')

  const { createTaskMutation, editTaskMutation } = useMutateTask()

  useEffect(() => {
    if (selectedTaskOnEdit) {
      setTitleInput(selectedTaskOnEdit.title)
    }
  }, [selectedTaskOnEdit])

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (selectedTaskOnEdit) {
      editTaskMutation.mutate({...selectedTaskOnEdit, title: titleInput})
    } else {
      createTaskMutation.mutate(titleInput)
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInput(e.target.value)
  }

  console.log('rendered TaskEdit')
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        className="mb-3 px-3 py-2 border border-gray-300"
        type="text"
        onChange={handleOnChange}
        value={titleInput}
      />
      <button
        className="disabled:opacity-40 my-3 mx-3 py-2 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded"
        disabled={false}
      >
        { selectedTaskOnEdit ? 'Update' : 'Create' }
      </button>
    </form>
  )
}

export const TaskEditMemo = memo(TaskEdit)
