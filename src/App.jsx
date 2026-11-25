/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { ServicesPage } from './pages/ServicesPage.jsx';
import { BookingPage } from './pages/BookingPage.jsx';
import {
  AdminLoginPage,
  LoginPage,
  ServerLoginPage,
  SignupPage,
} from './pages/AuthPages.jsx';
import { UserDashboard } from './pages/UserDashboard.jsx';
import { AdminDashboard } from './pages/AdminDashboard.jsx';
import { ServerDashboard } from './pages/ServerDashboard.jsx';

const AppRouter = () => {
  const { currentView, session } = useApp();

  if (currentView === 'admin-dashboard') {
    if (session?.role !== 'admin') return <AdminLoginPage />;
    return <AdminDashboard />;
  }

  if (currentView === 'server-dashboard') {
    if (session?.role !== 'server') return <ServerLoginPage />;
    return <ServerDashboard />;
  }

  if (currentView === 'user-dashboard') {
    if (session?.role !== 'user') return <LoginPage />;
    return <UserDashboard />;
  }

  if (currentView === 'booking') {
    if (session?.role !== 'user') return <LoginPage />;
    return <BookingPage />;
  }

  if (currentView === 'login') {
    if (session?.role === 'user') return <UserDashboard />;
    if (session?.role === 'admin') return <AdminDashboard />;
    if (session?.role === 'server') return <ServerDashboard />;
    return <LoginPage />;
  }

  if (currentView === 'signup') {
    if (session?.role === 'user') return <UserDashboard />;
    if (session?.role === 'admin') return <AdminDashboard />;
    if (session?.role === 'server') return <ServerDashboard />;
    return <SignupPage />;
  }

  if (currentView === 'admin-login') {
    if (session?.role === 'admin') return <AdminDashboard />;
    if (session?.role === 'user') return <UserDashboard />;
    if (session?.role === 'server') return <ServerDashboard />;
    return <AdminLoginPage />;
  }

  if (currentView === 'server-login') {
    if (session?.role === 'server') return <ServerDashboard />;
    if (session?.role === 'admin') return <AdminDashboard />;
    if (session?.role === 'user') return <UserDashboard />;
    return <ServerLoginPage />;
  }

  if (currentView === 'services') {
    return <ServicesPage />;
  }

  return <HomePage />;
};

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
