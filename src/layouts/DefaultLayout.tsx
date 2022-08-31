import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Menu } from '../components/Menu'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Menu />
      <Outlet />
    </>
  )
}
