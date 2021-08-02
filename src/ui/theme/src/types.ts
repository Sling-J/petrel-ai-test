export type ThemeFontSizes = [
  '12px',
  '14px',
  '16px',
  '18px',
  '24px',
  '32px'
]

export interface ThemeLineHeight {
  xs: number
  s: number
  m: number
  l: number
  xl: number
}

export interface ThemeFontWeight {
  light: number
  regular: number
  medium: number
  semibold: number
  bold: number
}

export interface ThemeColors {
  primary: string
  secondary: string
  tertiary: string
  tertiaryLight: string
  white: string
  grey: string
}

export type BackgroundAndColorType = {
  background: string
  color: string
}

export interface Theme {
  fontSizes: ThemeFontSizes
  fontWeight: ThemeFontWeight
  lineHeight: ThemeLineHeight
  colors: ThemeColors
}
