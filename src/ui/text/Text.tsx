import {
  typography,
  space,
  color,
  layout,
  TypographyProps,
  SpaceProps,
  LayoutProps,
} from 'styled-system'
import { styled } from '../theme'

export type TextProps = TypographyProps &
  SpaceProps &
  LayoutProps & {
    as?: string
    textOverflow?: string
    color?: string
  }

const Text = styled.span<TextProps>`
  ${typography};
  ${space};
  ${color};
  ${layout};
`

export default Text
