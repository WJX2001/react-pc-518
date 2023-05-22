import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { history,HistoryRouter } from './utils/history'
import Login from './pages/Login'
import Layout from '@/pages/Layout'
import { AuthComponent } from './components/AuthComponent'
import './App.css'
import Publish from './pages/Publish'
import Article from './pages/Article'
import Home from './pages/Home'

function App() {
  return (
    <HistoryRouter history={history}>
      <div className="App">
        <Routes>
          {/* 创建路由path路径和组件对应关系 */}
          {/* Layout需要鉴权处理 */}
          {/* 这里的Layout不能写死 要根据是否登录进行判断 */}
          <Route
            path="/"
            element={
              <AuthComponent>
                <Layout />
              </AuthComponent>
            }
          >
            <Route index element={<Home />}></Route>
            <Route path="article" element={<Article />}></Route>
            <Route path="publish" element={<Publish />}></Route>
          </Route>

          {/* 这里不需要 */}
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </HistoryRouter>
  )
}

export default App
