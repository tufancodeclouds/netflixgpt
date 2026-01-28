// src/components/Header.jsx
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logoutUser } from '../features/auth/authThunks';
import { LOGO } from '../utils/constants'

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();
  const isBrowsePage = location.pathname.startsWith('/browse');

  // Extract first name from display name
  const getFirstName = (displayName) => {
    if (!displayName) return null;
    return displayName.split(' ')[0];
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      toast.success('Logged out successfully', {
        position: 'top-right',
        autoClose: 2000,
      });
    } catch (error) {
      toast.error('Logout failed', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <header className="absolute py-2 w-full z-20 bg-linear-to-b from-black">
      <div className="container mx-auto px-5 flex justify-between items-center">
        <img src={LOGO} alt="logo" width={148} height={40} />
        
        {user && isBrowsePage && (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-md">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="white" 
                    viewBox="0 0 24 24" 
                    className="w-5 h-5">
                  <path d="M12 12c2.7 0 4.5-2.1 4.5-4.5S14.7 3 12 3 7.5 5.1 7.5 7.5 9.3 12 12 12zm0 2.25c-3 0-9 1.5-9 4.5V21h18v-2.25c0-3-6-4.5-9-4.5z"/>
                </svg>
              </span>
              <span className="text-white text-sm font-medium">
                {getFirstName(user.displayName) || user.email}
              </span>
            </div>
            
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-colors font-semibold text-white text-sm cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;