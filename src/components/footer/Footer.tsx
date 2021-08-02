import React, { FC } from 'react'

import { Space } from 'antd'
import {
  InstagramOutlined,
  FacebookFilled,
  TwitterCircleFilled,
} from '@ant-design/icons'

import { styled } from 'src/ui/theme'
import { Wrapper } from 'ui'

const FooterWrap = styled.div`
  border-top: 1px solid ${props => props.theme.colors.grey};
  margin-top: 48px;
  padding: 24px 0;
  text-align: center;

  .__footer-socials {
    font-size: ${props => props.theme.fontSizes[4]};
    margin-bottom: 8px;

    .__footer-socials-instagram { color: #E4405F; }
    .__footer-socials-facebook { color: #3D5A99; }
    .__footer-socials-twitter { color: #2B7BB9; }
  }

  p {
    margin: 0;
  }
`

const Footer: FC = () => {
  return (
    <Wrapper>
      <FooterWrap>
        <p className='__footer-socials'>
          <Space>
            <span>Follow us on:</span>
            <a href='https://instagram.com/' target='_blank' rel='noreferrer'>
              <InstagramOutlined className='__footer-socials-instagram'/>
            </a>
            <a href='https://instagram.com/' target='_blank' rel='noreferrer'>
              <FacebookFilled className='__footer-socials-facebook'/>
            </a>
            <a href='https://instagram.com/' target='_blank' rel='noreferrer'>
              <TwitterCircleFilled className='__footer-socials-twitter'/>
            </a>
          </Space>
        </p>

        <p className='__footer-copyright'>
          © Petrel AI
        </p>
      </FooterWrap>
    </Wrapper>
  )
}

export default Footer
