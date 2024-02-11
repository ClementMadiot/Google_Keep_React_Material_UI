import { Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../styles/index.css'

/// Components
import SwipeDrawer from './SwipeDrawer'
import Notes from './Notes/Notes'
import Archives from './Archives/Archives'
import DeleteNotes from './Delete/DeleteNotes'

const Home = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Router>
        <SwipeDrawer />
        <Routes>
          <Route path="/" element={<Notes />}/>
          <Route path="/archive" element={<Archives />}/>
          <Route path="/delete" element={<DeleteNotes />}/>
        </Routes>
      </Router>
    </Box>
  )
}

export default Home
