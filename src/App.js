import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Layout from '@/pages/Layout'
import { Button } from 'antd'

function App() {
  return (
    <BrowserRouter>
      <Button type='primary'>Primary Button</Button>
      <div className="App">
        <Routes>
          {/* 创建路由path路径和组件对应关系 */}
          <Route path='/' element={<Layout />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
