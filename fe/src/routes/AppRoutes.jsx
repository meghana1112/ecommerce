import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import MainLayout from '../layouts/MainLayout';
import Loader from '../components/Loader';

// Lazy loading pages for better performance
const Home = lazy(() => import('../pages/Home'));
const ProductListing = lazy(() => import('../pages/ProductListing'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const Cart = lazy(() => import('../pages/Cart'));
const Checkout = lazy(() => import('../pages/Checkout'));
const Wishlist = lazy(() => import('../pages/Wishlist'));
const Login = lazy(() => import('../pages/Auth/Login'));
const Signup = lazy(() => import('../pages/Auth/Signup'));
const Profile = lazy(() => import('../pages/Profile'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));

const ProtectedRoute = ({ children }) => {
  const { user } = useApp();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Loader fullScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route 
            path="/checkout" 
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
};

export default AppRoutes;
