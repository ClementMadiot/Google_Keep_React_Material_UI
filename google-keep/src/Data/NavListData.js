import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

export const NavListData = [
  {
    id: 1,
    name: 'Notes',
    icon: <LightbulbOutlinedIcon />,
    route: '/',
  },
  {
    id: 2,
    name: 'Archives',
    icon: <ArchiveOutlinedIcon />,
    route: '/archive',
  },
  {
    id: 3,
    name: 'Trash',
    icon: <DeleteOutlinedIcon />,
    route: '/delete',
  },

  // {
  //   id: 4,
  //   name: '',
  //   icon: {}
  // },
  // {
  //   id: 5,
  //   name: '',
  //   icon: {}
  // }
]
