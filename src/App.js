import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Layout from '@/pages/Layout'
import { AuthComponent } from './components/AuthComponent'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 创建路由path路径和组件对应关系 */}
          {/* Layout需要鉴权处理 */}
          {/* 这里的Layout不能写死 要根据是否登录进行判断 */}
          <Route path='/' element={
            <AuthComponent>
              <Layout />
            </AuthComponent>
          }></Route>
          
          {/* 这里不需要 */}
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
