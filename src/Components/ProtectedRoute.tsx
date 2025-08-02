import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../Store/AuthState';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isLogin } = useAuthStore();
  console.log("isLogin in ProtectedRoute", isLogin);
  const location = useLocation();

  // If user is not logged in, redirect to login page
  // Pass the current location so we can redirect back after login
//   if (!isLogin) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

  // If user is logged in, render the protected content
  return <>{children}</>;
}