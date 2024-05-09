import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Index from './pages/Index';
import Feature from './pages/Feature';
import Discover from './pages/Discover';
import Profile from './pages/Profile';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const location = useLocation();
  const [theme, colorMode] = useMode();
  const isLoginPage = location.pathname === '/Login';

  return (
    <div>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {!isLoginPage && <Navbar />}
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='login' element={<Login />} />
            <Route path='profile' element={<Profile />} />
            <Route path='feature' element={<Feature />} />
            <Route path='discover' element={<Discover />} />
            <Route path='product' element={<Products />} />
          </Routes>
          {!isLoginPage && <Footer />}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
