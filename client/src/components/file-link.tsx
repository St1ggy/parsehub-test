import { Icon } from 'components'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { TFileType } from 'types'

type RowProps = {
  name: string
  to: string
  type: TFileType
}

const RowWrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.5em;

  &:visited {
    color: inherit;
  }

  & > span {
    display: inline-block;
    margin-right: 10px;
  }
  & > span + span {
    text-decoration: underline;
  }
`

export const FileLink: FC<RowProps> = ({ name, type, to }) => (
  <RowWrapper to={to}>
    <Icon type={type} />
    <span>{name}</span>
  </RowWrapper>
)
