import styled from 'src/ui/theme/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import {
  flexbox,
  space,
  layout,
} from 'styled-system'

const Flex = styled('div', { shouldForwardProp })`
  box-sizing: border-box;
  display: flex;
  ${layout}
  ${flexbox}
  ${space}
`

export default Flex
