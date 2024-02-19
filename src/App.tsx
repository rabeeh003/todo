import './App.css'
import ImageHeader from './components/ImageHeader'
import Todo from './components/todo'

function App() {

  return (
    <>
      <ImageHeader/>
      <h2 className='text-6xl text-blue-500 font-bold m-10'>TODO</h2>
      <Todo/>
    </>
  )
}

export default App
