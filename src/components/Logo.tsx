import { CardMedia } from '@mui/material'

import logo from '../public/img/logo.png'

export function Logo() {
  return (
    <CardMedia
      component="img"
      src={logo}
      alt="Frater Medical"
      sx={{
        width: 90,
        height: 36,
      }}
    />
  )
}
