import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login.page'
import InfoPage from './pages/Info/info.page'

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path='/info' element={<InfoPage />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
