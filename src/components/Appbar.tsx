import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const pages = ['Login', 'Register'];

function ResponsiveAppBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          onClick={() => navigate('/')}
          sx={{
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Welcome
        </Typography>
        <Box sx={{ display: 'flex' }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => navigate(`/${page.toLowerCase()}`)}
              sx={{
                color: 'white',
                mx: 1,
                textTransform: 'none',
                borderRadius: 20,
                padding: '8px 16px',
                fontWeight: 600,
                transition: 'background-color 0.3s, transform 0.3s',
                '&:hover': {
                  backgroundColor: '#555',
                  transform: 'scale(1.05)',
                },
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
