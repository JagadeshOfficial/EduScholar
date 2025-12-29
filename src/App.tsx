
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import Assessment from './pages/Assessment';
import Results from './pages/Results';
import Scholarships from './pages/Scholarships';
import Landing from './pages/Landing';
import Login from './pages/Login';


// Admin Pages
import AdminStudents from './pages/admin/Students';
import AdminExams from './pages/admin/Exams';
import AdminScholarships from './pages/admin/Scholarships';
import AdminSettings from './pages/admin/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        {/* Student Routes */}
        <Route path="/app" element={<Layout />}>
          <Route index element={<Navigate to="/app/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="results" element={<Results />} />
          <Route path="scholarships" element={<Scholarships />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="students" element={<AdminStudents />} />
          <Route path="exams" element={<AdminExams />} />
          <Route path="scholarships" element={<AdminScholarships />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* Catch all redirect to landing */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
