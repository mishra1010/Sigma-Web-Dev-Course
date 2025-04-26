import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //const [name, setName] = useState('Deepak')
  const[form, setForm] = useState({email: "", phone: ""})
  //const[form, setForm] = useState({}) this can also be declared but we need to handle with ternary operator in set in return

  const handleClick = () => {
    alert('Button clicked!')
  }

  const handleMouseOver = () => {
    alert('Mouse over the red div!')
  }

  const handleChange = (event) => {
    //setName(event.target.value)
    setForm({...form, [event.target.name]: [event.target.value]})
    console.log(form)
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
      <div className="red" onMouseOver={handleMouseOver}>I am a red div</div>

      <input type = "text" name = "email" value={form.email} onChange={handleChange} />
      <input type = "text" name = "phone" value={form.phone} onChange={handleChange} />
    </>
  )
}

export default App
