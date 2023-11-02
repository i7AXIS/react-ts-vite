import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'sans-serif'
      }}
    >
      <h1>React-Vite-Typescript Template</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
