// src/hooks/useAuth.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import { setUser, clearAuth } from '../features/auth/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

  useEffect(() => {    
    const unsubscribe = authService.onAuthStateChange((firebaseUser) => {
      if (firebaseUser) {
        // User is logged in - update Redux
        dispatch(
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
            emailVerified: firebaseUser.emailVerified,
          })
        );

        // Now navigate to browse
        navigate('/browse')

      } else {
        // User is logged out - clear Redux
        dispatch(clearAuth());

        // Now navigate to login
        navigate('/')
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return {
    user,
    isAuthenticated,
    loading,
  };
};

export default useAuth;