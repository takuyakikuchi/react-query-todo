import { VFC } from 'react'
import { MainTask } from './components/MainTask'

const App: VFC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-gray-600 text-sm font-mono">
      <MainTask />
    </div>
  )
}

export default App
