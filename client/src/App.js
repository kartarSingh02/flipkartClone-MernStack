import { Box } from '@mui/material';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Header/>
      <Box style={{ marginTop:55 }}>
        <Home/>
      </Box>
    </>
  );
}

export default App;
