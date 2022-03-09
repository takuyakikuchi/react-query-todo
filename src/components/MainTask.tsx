import { VFC, useState } from "react"
import { TaskListMemo } from "./TaskList"
import { TaskEditMemo } from "./TaskEdit"

export const MainTask: VFC = () => {
  const [text, setText] = useState('');

  console.log('rendered MainTask')
  return (
    <>
      <input
        className="mb-3 px-3 py-2 border border-gray-300"
        placeholder="input any text"
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <p className="mb-10 text-xl font-bold">Tasks</p>
      <div className="grid grid-cols-2 gap-40">
        <TaskListMemo />
        <TaskEditMemo />
      </div>
    </>
  )
}
