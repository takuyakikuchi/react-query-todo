import { VFC } from "react"
import { TaskList } from "./TaskList"

export const MainTask: VFC = () => {
  return (
    <>
      <p className="mb-10 text-xl font-bold">Tasks</p>
      <TaskList />
    </>
  )
}
