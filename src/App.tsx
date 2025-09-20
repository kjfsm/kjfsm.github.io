import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import CirclePage from './pages/CirclePage'
import ContactPage from './pages/ContactPage'
import TourabuPage from './pages/TourabuPage'
import WindowsPage from './pages/WindowsPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="circle" element={<CirclePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="tourabu/tantou-cp" element={<TourabuPage />} />
        <Route path="windows" element={<WindowsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App