import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './components/route/AppRoutes'



function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
