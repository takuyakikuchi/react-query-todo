import { useState, VFC } from "react"
import { TaskList } from "./TaskList"
import { TaskEdit } from "./TaskEdit"
import { Task } from "../types/types"

export const MainTask: VFC = () => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  const handleOnClickEdit = (task: Task) => {
    setSelectedTask(task)
  }

  return (
    <>
      <p className="mb-10 text-xl font-bold">Tasks</p>
      <div className="grid grid-cols-2 gap-40">
        <TaskList onClickEdit={handleOnClickEdit} />
        { selectedTask && <TaskEdit task={selectedTask} /> }
      </div>
    </>
  )
}
