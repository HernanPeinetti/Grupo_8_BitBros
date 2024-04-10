import SideBar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage';
import CategoriesPage from './pages/CategoriesPage';

function App() {

  return (
    <Router>
      <div className='App d-flex'>
        <SideBar />
        <main>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
