import { useContext } from 'react'

import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'

/// Components
import Form from './Form'
import Note from './Note'

import { DataContext } from '../Context/DataProvider'
import EmptyNotes from './EmptyNotes'

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}))

const SectionNotes = styled(Box)`
  margin: 8px 180px;
`

const Notes = () => {
  const { notes } = useContext(DataContext)

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box component="section" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Form />
        <SectionNotes key={notes} component="section">
          {notes.length > 0 ? (
            <Grid container style={{ marginTop: 16 }}>
              {notes.map((note) => (
                <Grid item>
                  <Note key={notes} note={note} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <EmptyNotes />
          )}
        </SectionNotes>
      </Box>
    </Box>
  )
}

export default Notes
