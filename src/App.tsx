import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './components/route/AppRoutes'
import { CartProvider } from './components/cart/CartProvider'


function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
