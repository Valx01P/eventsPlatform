import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = () => {
    if (location.pathname === '/') {
      // If we're already on the home page, do nothing
      return;
    } else if (location.pathname.split('/').length > 3) {
      // If we're on an event page, go back to the location page
      navigate(-1);
    } else {
      // Otherwise, go to the home page
      navigate('/');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          {/* Replace with your actual logo */}
          🏙️ CityEvents
        </Link>
        <button
          onClick={handleNavigation}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          {location.pathname === '/' ? 'Home' : 'Back'}
        </button>
      </div>
    </header>
  );
};

export default Header;