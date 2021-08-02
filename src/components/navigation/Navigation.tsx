import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

import { styled } from 'src/ui/theme'
import { Box, Text } from 'ui'

const ShowDetailsNavWrap = styled.div`
  background: ${props => props.theme.colors.white};
  display: flex;
  alignItems: center;
  margin-bottom: 24px;

  .__show-details-nav-item {
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
    }
  }

  .__active {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`

type NavItem = {
  key: string
  name: string
  url: string
}

interface ShowDetailsNavProps {
  activeKey: string
  navItems: NavItem[]
}

const Navigation: FC<ShowDetailsNavProps> = ({
  activeKey,
  navItems
}) => {
  const history = useHistory()

  return (
    <ShowDetailsNavWrap>
      {navItems.map((item, idx) => (
        <Box
          className={`__show-details-nav-item ${activeKey === item.key && '__active'}`}
          onClick={() => history.push(item.url)}
          padding='8px 16px'
          key={idx}
        >
          <Text fontSize={2}>
            {item.name}
          </Text>
        </Box>
      ))}
    </ShowDetailsNavWrap>
  )
}

export default Navigation
