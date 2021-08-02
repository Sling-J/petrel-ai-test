import { createElement, FC } from 'react'
import Text, { TextProps } from './Text'

type TruncateProps = {
  limit: number
  children: string
}

const Truncate: FC<TruncateProps & TextProps> = ({
  limit,
  children,
  ...rest
}) => {
  return createElement(
    Text,
    { ...rest, title: children },
    children.length > limit
      ? children.substring(0, limit - 3) + '...'
      : children,
  )
}

export default Truncate
