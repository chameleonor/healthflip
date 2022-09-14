/* eslint-disable no-unused-vars */
import { Pallete, PaletteColorOptions } from '@mui/material'

declare module '@mui/material/styles' {
  interface PaletteOptions {
    grey: PaletteColorOptions.ColorPartial
    gold: PaletteColorOptions.ColorPartial
    blue: PaletteColorOptions.ColorPartial
    white: string
  }

  interface Theme {
    palette: PaletteOptions
  }
}
