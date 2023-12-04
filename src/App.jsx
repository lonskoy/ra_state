import './App.css'
import { ProjectList } from './components/ProjectList'
import { Toolbar } from './components/Toolbar'

function App() {

  return (
    <div className='conteiner'>
        <Toolbar />
        <ProjectList />
    </div>
  )
}

export default App
