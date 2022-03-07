import { VFC } from "react"
import { TaskList } from "./TaskList"
import { TaskEdit } from "./TaskEdit"

export const MainTask: VFC = () => {
  console.log('rendered MainTask')
  return (
    <>
      <p className="mb-10 text-xl font-bold">Tasks</p>
      <div className="grid grid-cols-2 gap-40">
        <TaskList />
        <TaskEdit />
      </div>
    </>
  )
}
