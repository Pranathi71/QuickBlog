import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/AddBlog'
import ListBlog from './pages/admin/ListBlog'
import Comments from './pages/admin/Comments'
import Login from './components/admin/Login';
import 'quill/dist/quill.snow.css';//Quill is a rich text editor for the web.In simple terms → it lets users type text with formatting (like bold, italic, bullet lists, links, images, etc.) instead of just plain text.
import {Toaster} from'react-hot-toast';
import { useAppContext } from './context/AppContext'

const App = () => {
  const {token} =useAppContext()
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/blog/:id" element ={<Blog/>}/>
        <Route path='/admin' element={token?<Layout/>:<Login/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='addBlog' element={<AddBlog/>}/>
          <Route path='listBlog' element={<ListBlog/>}/>
          <Route path='comments' element={<Comments/>}/>

        </Route>
      </Routes>
    </div>
  )
}

export default App