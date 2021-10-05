import React, {useState} from "react"

function App() {
  const [counter, setCount] = useState(0)
  const [input, setInput] = useState('Ваш текст')

  function increment() {
    setCount(counter+1)
  }

  function decrement() {
    setCount(counter-1)
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <h1>{input}</h1>
      <input type="text" value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={increment}>Більше</button>
      <button onClick={decrement}>Меньше</button>
    </div>
  );
}

export default App;