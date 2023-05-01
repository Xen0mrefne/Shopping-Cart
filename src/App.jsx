import './App.css'
import ShoppingContextProvider from './components/context/ShoppingContext'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <ShoppingContextProvider>
        <header className='pb-[80px] mb-5'>
          <Navbar />
        </header>
        <main>
          <Home />
        </main>
        <Footer />
      </ShoppingContextProvider>
    </>
  )
}

export default App
