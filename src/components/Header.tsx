import { Stack } from '@mui/material'
import { AccountMenu } from './AccountMenu'
import { Logo } from './Logo'

export function Header() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        height: 45,
        p: 2,
        boxSizing: 'content-box',
        borderStyle: 'solid',
        borderColor: (theme) => theme.palette.gold[700],
        borderWidth: 1,
      }}
    >
      <Logo />
      {/* <GlobalSearchAutocomplete />  */}
      <AccountMenu />
    </Stack>
  )
}
