import { useContext } from 'react'

import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'

/// Components
import DeleteNote from './DeleteNote'

import { DataContext } from '../Context/DataProvider'

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}))

const DeleteNotes = () => {
  const { deleteNotes } = useContext(DataContext)

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box component="section" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Grid container style={{ marginTop: 16 }}>
          {deleteNotes.map((deleted) => (
            <Grid item>
              <DeleteNote key={deleted} deleteNotes={deleted} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default DeleteNotes
