import './App.css';
import { useEffect } from 'react'
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
import { AuthProvider } from './Store/AuthContext';
import { RequireAuth } from './Components/Admin/RequireAuth';
import ProtectedRoute from './Auth/ProtectedRoute';
import ProfilePage from './Pages/User/ProfilePage';
import EnquireFormPage from './Pages/User/EnquireFormPage';
import InboxPage from './Pages/User/InboxPage';
import InboxCompanyPage from './Pages/Company/InboxCompanyPage';
import ProfileCompanyPage from './Pages/Company/ProfileCompanyPage';
import ChatPage from './Pages/Chat/ChatPage';
import ChatCompanyPage from './Pages/Chat/ChatCompanyPage';
import CompanyProfilePage from './Pages/User/CompanyProfilePage';

function App() {


  return (

    <AuthProvider>


      <User>
        <Company>

          <Router>
            <Routes>

              <Route path='/' element={<LandingPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<UserSignupPage />} />
              <Route path='/homepage' element={<HomePage />} />
              <Route path='/companies' element={<CompaniesListPage />} />
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/enquire-form' element={<EnquireFormPage />} />
              <Route path='/inbox' element={<InboxPage />} />
              <Route path='/profile/company/:id' element={<CompanyProfilePage />} />

            </Routes>


            <Routes>
              <Route path='/company/signup' element={<CompanySignupPage />} />
              <Route path='/company/login' element={<CompanyLoginPage />} />
              <Route path='/company/homepage' element={<CompanyHomePage />} />
              <Route path='/company/inbox' element={<InboxCompanyPage />} />
              <Route path='/company/profile/:id' element={<ProfileCompanyPage />} />
              <Route path='/company/chat' element={<ChatCompanyPage />} />
            </Routes>


            <Routes>
              <Route path='/admin/login' element={<AdminLoginPage />} />


              <Route path='/admin/dashboard' element={<DashbaordPage />} />
              <Route path='/admin/users' element={<Userspage />} />
              <Route path='/admin/companies' element={<CompaniesPage />} />
              {/* <ProtectedRoute path='/admin/companies' component={<CompaniesPage/>} auth={true} /> */}
              <Route path='/admin/posts' element={
                // <RequireAuth>
                <PostsPage />
                //  </RequireAuth>
              } />

            </Routes>

            <Routes>
              <Route path='/chat' element={<ChatPage />} />

            </Routes>
          </Router>
        </Company>
      </User>

    </AuthProvider>
  );
}

export default App;
