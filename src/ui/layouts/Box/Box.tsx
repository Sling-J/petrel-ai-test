import styled from 'src/ui/theme/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import {
  flexbox,
  grid,
  space,
  layout,
  border,
  color,
  position,
} from 'styled-system'

const Box = styled('div', { shouldForwardProp })`
  box-sizing: border-box;
  min-width: 0;
  ${position}
  ${layout}
  ${grid}
  ${flexbox}
  ${space}
  ${border}
  ${color}
`

export default Box
