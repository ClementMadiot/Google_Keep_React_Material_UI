import { Box } from "@mui/material"
import { styled } from '@mui/material/styles'

/// Components
import Form from './Form';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="section" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader/>
      <Form/>
      </Box>
    </Box>
  );
};

export default Notes;