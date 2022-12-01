import { Icon } from 'components'
import { ComponentProps, FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { TFileType } from 'types'

type RowProps = ComponentProps<typeof Link> & {
  name: string
  type: TFileType
}

const RowWrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.5em;
  color: inherit;

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

export const FileLink: FC<RowProps> = ({ name, type, to, onClick, relative }) => (
  <RowWrapper to={to} onClick={onClick} relative={relative}>
    <Icon type={type} />
    <span>{name}</span>
  </RowWrapper>
)
