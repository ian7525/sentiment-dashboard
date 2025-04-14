import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="card max-w-md w-full">
        <h1 className="text-primary">情感分析儀表板</h1>
        <p className="mb-4 text-secondary">
          使用 React 和 Tailwind CSS 構建的情感分析工具
        </p>
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="btn-primary"
          >
            計數: {count}
          </button>
          <button
            onClick={() => setCount(0)}
            className="btn-secondary"
          >
            重置
          </button>
        </div>
      </div>
    </div>
  )
}

export default App