import Header from "./components/Header"
import TaskList from "./components/TaskList"
import './App.css'

const showTask = [
  { id: 0,
    name: "Aprender ingles"},
  { id: 1,
    name: "Aprender ingles"},
]

function App() {

  return ( 
      <div>
        <Header/>
        <TaskList/>
        
      </div>
  )
}

export default App
