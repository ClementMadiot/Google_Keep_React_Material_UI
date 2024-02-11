import { useContext } from 'react'
import { Card, CardContent, CardActions, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import {
  RestoreFromTrashOutlined as Restore,
  DeleteForeverOutlined as Delete,
} from '@mui/icons-material'

import { DataContext } from '../Context/DataProvider'

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`

const DeleteNote = ({ note }) => {
  const {  setNotes, deletedNotes, setDeletedNotes } =
    useContext(DataContext)

  const restoreNote = (note) => {
    const updatedNotes = deletedNotes.filter((data) => data.id !== note.id)
    setDeletedNotes(updatedNotes)
    setNotes((prevArr) => [note, ...prevArr])
  }
  const deleteNote = (note) => {
    const updatedNotes = deletedNotes.filter((data) => data.id !== note.id)
    setDeletedNotes(updatedNotes)
  }

  return (
    <StyledCard component="article">
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Delete 
        fontSize="small" 
        onClick={() => deleteNote(note)} />
        <Restore
          fontSize="small"
          onClick={() => restoreNote(note)}
        />
      </CardActions>
    </StyledCard>
  )
}

export default DeleteNote
