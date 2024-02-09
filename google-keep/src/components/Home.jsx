import { Box } from '@mui/material';
import "../styles/index.css";

/// Components
import SwipeDrawer from './SwipeDrawer';
import Notes from './Notes/Notes';

const Home = () => {
  return (
    <Box>
    <SwipeDrawer />
    <Notes />
    </Box>
  );
};

export default Home;