import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, setTodos] = useState([
    { id: 1, title: 'Todo 1', desc: "I am Todo1" },
    { id: 2, title: 'Todo 2', desc: "I am Todo2" },
    { id: 3, title: 'Todo 3', desc: "I am Todo3" }
  ])
/* to render lists, we need to create a component here or instead of component we can take this to return in the todo map section*/
  // const Todo = ({todo}) => {return (<>
  //   <div className="todo">{todo.id}</div>
  //   <div className="todo">{todo.title}</div>
  //   <div className="todo">{todo.desc}</div>
  //   </>)}

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn?<button>showbtn is true</button>: <button>showbtn is false</button>}
      {/*{showbtn && <button>showbtn is true</button>}*/}
      {/*<Todo /> */}
      {todos.map(todo => {
        return <div key={todo.id} >
        <div className="todo">{todo.id}</div>
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div> 
        </div> /*<Todo key={todo.id} todo={todo}/>*/
      })}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle showbtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
