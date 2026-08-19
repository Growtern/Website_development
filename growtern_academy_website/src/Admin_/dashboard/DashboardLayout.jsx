import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from './components/AppNavbar';
import MainGrid from './MainGrid';
import SideMenu from './components/SideMenu';
import AppTheme from '../shared-theme/AppTheme';
import { useNavigate } from "react-router-dom";

export default function DashboardLayout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");

    // redirect to login 
    navigate("/admin");
    
  };

  return (
    <AppTheme>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>

       <AppNavbar />

        {/* Main content */}
        <div  className='container mt-5'>
            <MainGrid>
              {children}
            </MainGrid>
        </div>

      </Box>
    </AppTheme>
  );
}
