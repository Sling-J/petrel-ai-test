import React, {FC} from 'react'

import { styled } from 'src/ui/theme'
import { PlusOutlined } from '@ant-design/icons'

interface ShowsImageWrapProps {
  width: string
}

const ShowsImageWrap = styled.div<ShowsImageWrapProps>`
  position: relative;
  max-width: ${props => props.width || '162px'};
  min-width: ${props => props.width || '162px'};

  img {
    width: 100%;
  }

  .__shows-image__favorite {
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;

    &:hover {
      .__shows-image-favorite__bookmark {
        fill: rgba(255, 255, 255, 0.3);
      }
    }

    .__shows-image-favorite__bookmark {
      fill: rgba(0, 0, 0, 0.3);
      transition: fill 0.2s;
    }

    .__shows-image-favorite__plus {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -100%);
      color: #fff;
      font-size: 16px;
    }
  }
`

interface ShowsImageProps {
  className?: string
  url: string
  alt?: string
  width?: string
}

const ShowsImage: FC<ShowsImageProps> = ({
  className,
  width,
  url,
  alt
}) => (
  <ShowsImageWrap className={className} width={width}>
    <img src={url} alt={alt || 'Show Image'}/>
    <div className='__shows-image__favorite'>
      <svg
        className='__shows-image-favorite__bookmark'
        width='32px'
        height='42px'
        viewBox='0 0 24 34'
        xmlns='http://www.w3.org/2000/svg'
        role='presentation'
      >
        <polygon
          points='24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343'
          fill='rgba(0, 0, 0, 0.3)'
        />
        <polygon
          points='24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343'
        />
        <polygon
          points='24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049'
        />
      </svg>

      <PlusOutlined className='__shows-image-favorite__plus'/>
    </div>
  </ShowsImageWrap>
)

export default ShowsImage
