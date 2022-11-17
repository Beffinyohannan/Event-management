import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/User/LoginPage';
import UserSignupPage from './Pages/User/UserSignupPage';
import LandingPage from './Pages/User/LandingPage';
import CompanySignupPage from './Pages/Company/CompanySignupPage';
import AdminLoginPage from './Pages/Admin/AdminLoginPage';
import HomePage from './Pages/User/HomePage';
import DashbaordPage from './Pages/Admin/DashbaordPage';
import Userspage from './Pages/Admin/Userspage';
import CompaniesPage from './Pages/Admin/CompaniesPage';
import PostsPage from './Pages/Admin/PostsPage';
import User from './Store/UserContext'
import Company from './Store/CompanyContext';
import CompanyLoginPage from './Pages/Company/CompanyLoginPage';
import CompaniesListPage from './Pages/User/CompaniesListPage';
import CompanyHomePage from './Pages/Company/CompanyHomePage';

function App() {
  return (
    <User>

      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<UserSignupPage />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/companies' element={<CompaniesListPage />} />
        </Routes>
<Company>

        <Routes>
          <Route path='/company/signup' element={<CompanySignupPage />} />
          <Route path='/company/login' element={<CompanyLoginPage />} />
          <Route path='/company/homepage' element={<CompanyHomePage />} />
        </Routes>
</Company>

        <Routes>
          <Route path='/admin/login' element={<AdminLoginPage />} />
          <Route path='/admin/dashboard' element={<DashbaordPage />} />
          <Route path='/admin/users' element={<Userspage />} />
          <Route path='/admin/companies' element={<CompaniesPage />} />
          <Route path='/admin/posts' element={<PostsPage />} />
        </Routes>
      </Router>
    </User>
  );
}

export default App;
