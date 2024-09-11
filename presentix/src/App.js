import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Layout components
import Main from './components/Website/Main';
import DashboardMain from './components/Dashboard/Main';


// Website components
import Home from './components/Website/Home/Home';
import AboutUs from './components/Website/Aboutus/about';
import Pricings from './components/Website/Pricings/Pricings';
import Services from './components/Website/Services/Services';
import Login from './components/Login/Login';
import Signup from './components/Website/Signup/Signup';

// Dashboard components
import UploadVideo from './components/Dashboard/Upload_vedio/Upload_video';
import Results from './components/Dashboard/Results/Results';
import Account from './components/Dashboard/Account/Account';
import Dashboard from './components/Dashboard/Home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Website routes */}
        <Route
          path="/"
          element={
            <Main>
              <Outlet />
            </Main>
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="pricings" element={<Pricings />} />
          <Route path="services" element={<Services />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        {/* Dashboard routes */}
        <Route
          path="/dashboard"
          element={
            <DashboardMain>
              <Outlet />
            </DashboardMain>
          }
        >
          <Route index element={< Dashboard/>} />
          <Route path="upload_video" element={<UploadVideo />} />
          <Route path="results" element={<Results />} />
          <Route path="accountsettings" element={<Account />} />
          <Route path="settings" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
