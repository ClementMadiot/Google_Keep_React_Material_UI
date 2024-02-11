import { useContext } from 'react'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'

/// Components
import Archive from './Archive'

import { DataContext } from '../Context/DataProvider'

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}))

const Archives = () => {
  const { archiveNotes } = useContext(DataContext)

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box component="section" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Grid container style={{ marginTop: 16 }}>
          {archiveNotes.map((archive) => (
            <Grid item>
              <Archive key={archive} archive={archive} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Archives
