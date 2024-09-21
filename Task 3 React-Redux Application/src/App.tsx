import { Route, Routes, Outlet } from 'react-router-dom'
import Layout from './layout/Layout'
import './App.css'
import Home from './pages/Home'
import AddPost from './pages/AddPost'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/add-post' element={<AddPost />} />
      </Route>
    </Routes>
  )
}

export default App
