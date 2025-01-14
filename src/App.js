
import './App.css';
import { Routes } from './Routes';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const theme = createTheme({
    palette:{
      primary:{
        main:'#162719'
      },
      secondary:{
        main:'#f2e5d7'
      }
    },
    
    Typography:{
      fontFamily:'Outfit", serif'
    },
    
  })
  return (
   <>
   <ThemeProvider theme={theme}>
   <Routes/>
   </ThemeProvider>
   </>
  );
}

export default App;
