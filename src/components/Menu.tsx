import { IconButton, Stack, Theme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {
  AddCircleOutline,
  Settings,
  PermContactCalendarOutlined,
  AlternateEmailOutlined,
  AssignmentOutlined,
  AssessmentOutlined,
  KeyboardOutlined,
  CheckBoxOutlineBlankOutlined,
  Event,
} from '@mui/icons-material'

export function Menu() {
  const navigate = useNavigate()

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: '100%',
        minWidth: 77,
        maxWidth: 77,
        width: 77,
        margin: 0,
        boxSizing: 'content-box',
        backgroundColor: (theme) => theme.palette.blue[500],
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          height: '50%',
          width: 77,
          boxSizing: 'content-box',
        }}
      >
        <IconButton
          size="large"
          // sx={{
          //   ':hover': {
          //     backgroundColor: (theme) =>
          //       alpha(theme.palette.gray[500]primary, 0.4),
          //     transition: 'background-color 0.5s ease',
          //   },
          // }}
          onClick={() => {
            navigate('/test')
          }}
        >
          <AddCircleOutline
            fontSize="large"
            sx={{
              color: (theme) => theme.palette.white,
            }}
          />
        </IconButton>

        <IconButton
          size="large"
          // sx={{
          //   ':hover': {
          //     backgroundColor: (theme) =>
          //       alpha(theme.palette.grey.primary, 0.4),
          //     transition: 'background-color 0.5s ease',
          //   },
          // }}
          onClick={() => {
            navigate('/calendar')
          }}
        >
          <Event
            fontSize="large"
            sx={{
              color: (theme) => theme.palette.white,
            }}
          />
        </IconButton>

        <IconButton
          size="large"
          // sx={{
          //   ':hover': {
          //     backgroundColor: (theme) =>
          //       alpha(theme.palette.grey.primary, 0.4),
          //     transition: 'background-color 0.5s ease',
          //   },
          // }}
        >
          <PermContactCalendarOutlined
            fontSize="large"
            sx={{
              color: (theme: Theme) => theme.palette.white,
            }}
          />
        </IconButton>

        <IconButton
          size="large"
          // sx={{
          //   ':hover': {
          //     backgroundColor: (theme) =>
          //       alpha(theme.palette.grey.primary, 0.4),
          //     transition: 'background-color 0.5s ease',
          //   },
          // }}
        >
          <Settings
            fontSize="large"
            sx={{
              color: (theme: Theme) => theme.palette.white,
            }}
          />
        </IconButton>

        <IconButton
          size="large"
          // sx={{
          //   ':hover': {
          //     backgroundColor: (theme) =>
          //       alpha(theme.palette.grey.primary, 0.4),
          //     transition: 'background-color 0.5s ease',
          //   },
          // }}
        >
          <AlternateEmailOutlined
            fontSize="large"
            sx={{
              color: (theme: Theme) => theme.palette.white,
            }}
          />
        </IconButton>
        <IconButton
          size="large"
          // sx={{
          //   ':hover': {
          //     backgroundColor: (theme) =>
          //       alpha(theme.palette.grey.primary, 0.4),
          //     transition: 'background-color 0.5s ease',
          //   },
          // }}
        >
          <AssessmentOutlined
            fontSize="large"
            sx={{
              color: (theme) => theme.palette.white,
            }}
          />
        </IconButton>
        <IconButton
          size="large"
          // sx={{
          //   ':hover': {
          //     backgroundColor: (theme) =>
          //       alpha(theme.palette.grey.primary, 0.4),
          //     transition: 'background-color 0.5s ease',
          //   },
          // }}
        >
          <AssignmentOutlined
            fontSize="large"
            sx={{
              color: (theme) => theme.palette.white,
            }}
          />
        </IconButton>

        <IconButton
          size="large"
          // sx={{
          //   ':hover': {
          //     backgroundColor: (theme) =>
          //       alpha(theme.palette.grey.primary, 0.4),
          //     transition: 'background-color 0.5s ease',
          //   },
          // }}
        >
          <KeyboardOutlined
            fontSize="large"
            sx={{
              color: (theme) => theme.palette.white,
            }}
          />
        </IconButton>

        <IconButton
          size="large"
          // sx={{
          //   ':hover': {
          //     backgroundColor: (theme) =>
          //       alpha(theme.palette.grey.primary, 0.4),
          //     transition: 'background-color 0.5s ease',
          //   },
          // }}
        >
          <CheckBoxOutlineBlankOutlined
            fontSize="large"
            sx={{
              color: (theme) => theme.palette.white,
            }}
          />
        </IconButton>
      </Stack>
    </Stack>
  )
}
