import React, { FC } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Input } from 'antd'
import { styled } from 'src/ui/theme'

import { Box, Flex, Wrapper } from 'ui'

const { Search } = Input

const HeaderWrap = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  margin-bottom: 32px;
  padding: 16px 0;

  .__header-info {
    width: 100%;

    .__header-logo {
      color: ${props => props.theme.colors.white};
      font-size: ${props => props.theme.fontSizes[4]};
      margin-right: 16px;

      &:hover {
        text-decoration: none;
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  .__header-auth {
    a {
      color: ${props => props.theme.colors.white};
      font-size: ${props => props.theme.fontSizes[3]};

      &:first-of-type {
        margin-right: 16px
      }

      &:hover {
        color: ${props => props.theme.colors.primary};
        text-decoration: none;
      }
    }
  }
`

const Header: FC = () => {
  const history = useHistory()

  const onSearch = (value: string) => {
    if (value.length !== 0) {
      history.push(`/search?q=${value}`)
    }
  }

  return (
    <HeaderWrap>
      <Wrapper>
        <Flex alignItems='center' justifyContent='space-between'>
          <Flex alignItems='center' className='__header-info'>
            <Link className='__header-logo' to='/'>
              LOGO
            </Link>
            <Box width='60%'>
              <Search
                placeholder='Search Shows and People'
                allowClear
                enterButton='Search'
                size='large'
                onSearch={onSearch}
              />
            </Box>
          </Flex>

          {/*<Flex className='__header-auth'>*/}
          {/*  <Link to='/sign-in'>Login</Link>*/}
          {/*  <Link to='/sign-up'>Register</Link>*/}
          {/*</Flex>*/}
        </Flex>
      </Wrapper>
    </HeaderWrap>
  )
}

export default Header
